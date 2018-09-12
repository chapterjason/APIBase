"use strict";
/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@apibase/core");
var Snapshot_1 = require("./Snapshot");
var CollectionSnapshot = /** @class */ (function (_super) {
    __extends(CollectionSnapshot, _super);
    function CollectionSnapshot(reference, data) {
        var e_1, _a;
        var _this = _super.call(this, reference, data) || this;
        var map = new core_1.Map();
        if (core_1.isObject(data)) {
            var keys = Object.keys(data);
            try {
                for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                    var key = keys_1_1.value;
                    map.set(key, data[key]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else if (Array.isArray(data)) {
            for (var key in data) {
                map.set(key, data[key]);
            }
        }
        else {
            throw new Error('The data at "' + reference.getPath().toString() + '" must be of type object or array.');
        }
        _this.map = map;
        return _this;
    }
    CollectionSnapshot.prototype.item = function (segment) {
        return new Snapshot_1.Snapshot(this.reference.reference(segment), this.map.get(segment));
    };
    CollectionSnapshot.prototype.forEach = function (callback) {
        var e_2, _a;
        try {
            for (var _b = __values(this.map.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                callback(this.item(key));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return this;
    };
    CollectionSnapshot.prototype.length = function () {
        return this.map.size();
    };
    CollectionSnapshot.prototype.reverse = function () {
        this.map.reverse();
        return this;
    };
    CollectionSnapshot.prototype.sortByKey = function () {
        this.map = this.map.sort(function (a, b) {
            return a[0].localeCompare(b[0]);
        });
        return this;
    };
    CollectionSnapshot.prototype.sortByProperty = function (property) {
        this.map = this.map.sort(function (a, b) {
            return a[1][property].localeCompare(b[1][property]);
        });
        return this;
    };
    return CollectionSnapshot;
}(Snapshot_1.Snapshot));
exports.CollectionSnapshot = CollectionSnapshot;
//# sourceMappingURL=CollectionSnapshot.js.map