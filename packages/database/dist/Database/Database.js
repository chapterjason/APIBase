/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

"use strict";
/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@apibase/core");
var Utils_1 = require("../Common/Utils");
var Reference_1 = require("./Reference");
var Database = /** @class */ (function () {
    function Database(mapping) {
        if (mapping === void 0) { mapping = {}; }
        this.depthLimit = 32;
        this.setRoot(mapping);
    }

    Database.prototype.delete = function (path) {
        var items = Utils_1.normalize(path);
        var current = this.mapping;
        if (items.length > 0) {
            var lastIndex = items.length - 1;
            var currentPath = [];
            for (var itemIndex in items) {
                var item = items[itemIndex];
                if (item in current) {
                    currentPath.push(item);
                    if (parseInt(itemIndex) === lastIndex) {
                        delete current[item];
                        return true;
                    }
                    current = current[item];
                }
                else {
                    throw new Error("Path \"" + item + "\" not found under \"/" + currentPath.join('/') + "\"!");
                }
            }
        }
        else {
            this.mapping = {};
            return true;
        }
    };
    Database.prototype.push = function (path, value) {
        var pathValue;
        try {
            pathValue = this.get(path);
        }
        catch (error) {
            this.set(path, {});
            pathValue = {};
        }
        finally {
            if (!core_1.isObject(pathValue)) {
                throw new Error('Path "' + path + '" is already occupied');
            }
            var id = core_1.generateIdentifier();
            this.set(path + '/' + id, value);
            return path + '/' + id;
        }
    };
    Database.prototype.set = function (path, value) {
        var items = Utils_1.normalize(path);
        var current = this.mapping;
        var counter = 0;
        var last = items.pop();
        if (last) {
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                counter++;
                if (counter > this.depthLimit) {
                    throw new Error("Depth limit of \"" + this.depthLimit + "\" exceeded!");
                }
                if (!current[item]) {
                    current[item] = {};
                }
                current = current[item];
            }
            current[last] = value;
        }
        else {
            this.setRoot(value);
        }
        return this;
    };
    Database.prototype.get = function (path) {
        var items = Utils_1.normalize(path);
        var current = this.mapping;
        if (items.length > 0) {
            var currentPath = [];
            for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
                var item = items_2[_i];
                if (item in current) {
                    currentPath.push(item);
                    current = current[item];
                }
                else {
                    throw new Error("Path \"" + item + "\" not found under \"/" + currentPath.join('/') + "\"!");
                }
            }
        }
        return current;
    };
    Database.prototype.ref = function (path) {
        if (path === void 0) {
            path = '/';
        }
        return new Reference_1.Reference(this, path);
    };
    Database.prototype.setRoot = function (value) {
        if (core_1.isObject(value)) {
            this.mapping = value;
        }
        else {
            throw new Error("Path \"/\" can only set to object!");
        }
    };
    return Database;
}());
exports.Database = Database;
//# sourceMappingURL=Database.js.map