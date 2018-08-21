"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var zlib = require("zlib");
var core_1 = require("@apibase/core");
var Database = /** @class */ (function () {
    function Database(mapping) {
        if (mapping === void 0) { mapping = {}; }
        this.depthLimit = 32;
        this.setRoot(mapping);
    }
    Database.prototype.load = function (file) {
        if (!fs.existsSync(file)) {
            throw new Error('Database file "' + file + '" does not exist!');
        }
        this.mapping = JSON.parse(zlib.inflateSync(Buffer.from(fs.readFileSync(file).toString(), 'base64')).toString());
    };
    Database.prototype.save = function (file) {
        fs.writeFileSync(file, zlib.deflateSync(JSON.stringify(this.mapping), { memLevel: 9, level: 9 }).toString('base64'));
    };
    Database.prototype.setRoot = function (value) {
        if (core_1.isObject(value)) {
            this.mapping = value;
        }
        else {
            throw new Error("Path \"/\" can only set to object!");
        }
    };
    Database.normalizePath = function (path) {
        return path
            .split('/')
            .map(function (part) { return part.trim(); })
            .filter(function (part) { return part.length; });
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
            return id;
        }
    };
    Database.prototype.set = function (path, value) {
        var items = Database.normalizePath(path);
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
        var items = Database.normalizePath(path);
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
    return Database;
}());
exports.Database = Database;
//# sourceMappingURL=Database.js.map