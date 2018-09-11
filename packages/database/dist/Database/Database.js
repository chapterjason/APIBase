"use strict";
/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return {value: o && o[i++], done: !o};
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@apibase/core");
var Reference_1 = require("./Reference/Reference");
var CollectionReference_1 = require("./Reference/CollectionReference");
var Database = /** @class */ (function () {
    function Database(mapping) {
        if (mapping === void 0) { mapping = {}; }
        this.depthLimit = 32;
        this.mapping = mapping;
    }
    Database.prototype.getPath = function (path) {
        if (path === void 0) {
            path = [];
        }
        if (typeof path === "string") {
            path = new core_1.Path(path);
        }
        else if (Array.isArray(path)) {
            path = new core_1.Path(path);
        }
        return path;
    };
    Database.prototype.delete = function (path) {
        if (path === void 0) {
            path = [];
        }
        path = this.getPath(path);
        if (path.length() === 0) {
            this.mapping = {};
            return true;
        }
        else {
            var segments = path.getSegments();
            var current = this.mapping;
            var lastIndex = segments.length - 1;
            var currentPath = new core_1.Path();
            var itemIndex = 0;
            for (; itemIndex < segments.length; itemIndex++) {
                var segment = segments[itemIndex];
                if (segment in current) {
                    currentPath.child(segment);
                    if (itemIndex === lastIndex) {
                        delete current[segment];
                        return true;
                    }
                    current = current[segment];
                }
                else {
                    throw new Error('Path "' + segment + '" not found under "' + currentPath.toString() + '"!');
                }
            }
        }
        return false;
    };
    Database.prototype.set = function (path, value) {
        path = this.getPath(path);
        if (path.length() === 0) {
            this.mapping = value;
        }
        else {
            var segments = path.getSegments();
            var current = this.mapping;
            var limitCounter = 0;
            for (var segmentIndex = 0; segmentIndex < segments.length; segmentIndex++) {
                var segment = segments[segmentIndex];
                limitCounter++;
                if (limitCounter > this.depthLimit) {
                    throw new Error('Depth limit of ' + this.depthLimit + ' exceeded!');
                }
                if (!current[segment]) {
                    current[segment] = {};
                }
                if (segmentIndex <= segments.length - 2) {
                    current = current[segment];
                }
                else {
                    current[segment] = value;
                }
            }
        }
        return this;
    };
    Database.prototype.get = function (path) {
        if (path === void 0) {
            path = [];
        }
        var e_1, _a;
        path = this.getPath(path);
        if (path.length() === 0) {
            return this.mapping;
        }
        else {
            var segments = path.getSegments();
            var current = this.mapping;
            var currentPath = new core_1.Path();
            try {
                for (var segments_1 = __values(segments), segments_1_1 = segments_1.next(); !segments_1_1.done; segments_1_1 = segments_1.next()) {
                    var segment = segments_1_1.value;
                    if (segment in current) {
                        currentPath.child(segment);
                        current = current[segment];
                    }
                    else {
                        throw new Error('Path "' + segment + '" not found under "' + currentPath.toString() + '"!');
                    }
                }
            }
            catch (e_1_1) {
                e_1 = {error: e_1_1};
            }
            finally {
                try {
                    if (segments_1_1 && !segments_1_1.done && (_a = segments_1.return)) _a.call(segments_1);
                }
                finally {
                    if (e_1) throw e_1.error;
                }
            }
            return current;
        }
    };
    Database.prototype.reference = function (path) {
        if (path === void 0) {
            path = [];
        }
        return new Reference_1.Reference(this, this.getPath(path));
    };
    Database.prototype.collection = function (path) {
        if (path === void 0) {
            path = [];
        }
        return new CollectionReference_1.CollectionReference(this, this.getPath(path));
    };
    return Database;
}());
exports.Database = Database;
//# sourceMappingURL=Database.js.map