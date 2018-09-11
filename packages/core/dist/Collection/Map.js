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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) {
        e = {error: error};
    }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", {value: true});
var MapTupelIterator = /** @class */ (function () {
    function MapTupelIterator(keys, values) {
        this.pointer = 0;
        this.keys = keys;
        this.values = values;
    }

    MapTupelIterator.prototype.next = function () {
        if (this.pointer < this.keys.length) {
            var index = this.pointer++;
            return {
                done: false,
                value: [this.keys[index], this.values[index]]
            };
        }
        else {
            return {
                done: true,
                value: null
            };
        }
    };
    MapTupelIterator.prototype[Symbol.iterator] = function () {
        return this;
    };
    return MapTupelIterator;
}());
exports.MapTupelIterator = MapTupelIterator;
var MapValueIterator = /** @class */ (function () {
    function MapValueIterator(values) {
        this.pointer = 0;
        this.values = values;
    }

    MapValueIterator.prototype.next = function () {
        if (this.pointer < this.values.length) {
            var index = this.pointer++;
            return {
                done: false,
                value: this.values[index]
            };
        }
        else {
            return {
                done: true,
                value: null
            };
        }
    };
    MapValueIterator.prototype[Symbol.iterator] = function () {
        return this;
    };
    return MapValueIterator;
}());
exports.MapValueIterator = MapValueIterator;
var MapKeyIterator = /** @class */ (function () {
    function MapKeyIterator(keys) {
        this.pointer = 0;
        this.keys = keys;
    }

    MapKeyIterator.prototype.next = function () {
        if (this.pointer < this.keys.length) {
            var index = this.pointer++;
            return {
                done: false,
                value: this.keys[index]
            };
        }
        else {
            return {
                done: true,
                value: null
            };
        }
    };
    MapKeyIterator.prototype[Symbol.iterator] = function () {
        return this;
    };
    return MapKeyIterator;
}());
exports.MapKeyIterator = MapKeyIterator;
var Map = /** @class */ (function () {
    function Map(items) {
        var e_1, _a;
        this._keys = [];
        this._values = [];
        if (items) {
            try {
                for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                    var pair = items_1_1.value;
                    console.log(pair);
                    this._keys.push(pair[0]);
                    this._values.push(pair[1]);
                }
            }
            catch (e_1_1) {
                e_1 = {error: e_1_1};
            }
            finally {
                try {
                    if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                }
                finally {
                    if (e_1) throw e_1.error;
                }
            }
        }
    }

    Map.prototype.clear = function () {
        this._keys = [];
        this._values = [];
    };
    Map.prototype.delete = function (key) {
        var index = this._keys.indexOf(key);
        if (index > -1) {
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
        }
        return false;
    };
    Map.prototype.entries = function () {
        return new MapTupelIterator(this._keys, this._values);
    };
    Map.prototype.forEach = function (callback) {
        var length = this._keys.length;
        for (var index = 0; index < length; index++) {
            callback(this._values[index], this._keys[index], this);
        }
    };
    Map.prototype.get = function (key) {
        var index = this._keys.indexOf(key);
        if (index > -1) {
            return this._values[index];
        }
    };
    Map.prototype.has = function (key) {
        return this._keys.indexOf(key) > -1;
    };
    Map.prototype.keys = function () {
        return new MapKeyIterator(this._keys);
    };
    Map.prototype.set = function (key, value) {
        this._keys.push(key);
        this._values.push(value);
    };
    Map.prototype.size = function () {
        return this._keys.length;
    };
    Map.prototype.values = function () {
        return new MapValueIterator(this._values);
    };
    Map.prototype[Symbol.iterator] = function () {
        return this.entries();
    };
    Map.prototype[Symbol.toStringTag] = function () {
        return 'Map';
    };
    Map.prototype.reverse = function () {
        this._keys = this._keys.reverse();
        this._values = this._values.reverse();
        return this;
    };
    Map.prototype.sort = function (compareFn) {
        return new Map(__spread(this.entries()).sort(compareFn));
    };
    return Map;
}());
exports.Map = Map;
//# sourceMappingURL=Map.js.map