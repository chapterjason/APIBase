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

class MapTupelIterator {
    constructor(keys, values) {
        this.pointer = 0;
        this.keys = keys;
        this.values = values;
    }

    next() {
        if (this.pointer < this.keys.length) {
            const index = this.pointer++;
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
    }

    [Symbol.iterator]() {
        return this;
    }
}
exports.MapTupelIterator = MapTupelIterator;

class MapValueIterator {
    constructor(values) {
        this.pointer = 0;
        this.values = values;
    }

    next() {
        if (this.pointer < this.values.length) {
            const index = this.pointer++;
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
    }

    [Symbol.iterator]() {
        return this;
    }
}
exports.MapValueIterator = MapValueIterator;

class MapKeyIterator {
    constructor(keys) {
        this.pointer = 0;
        this.keys = keys;
    }

    next() {
        if (this.pointer < this.keys.length) {
            const index = this.pointer++;
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
    }

    [Symbol.iterator]() {
        return this;
    }
}
exports.MapKeyIterator = MapKeyIterator;

class Map {
    constructor(items) {
        this._keys = [];
        this._values = [];
        if (items) {
            for (let pair of items) {
                this._keys.push(pair[0]);
                this._values.push(pair[1]);
            }
        }
    }

    clear() {
        this._keys = [];
        this._values = [];
    }

    delete(key) {
        const index = this._keys.indexOf(key);
        if (index > -1) {
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
            return true;
        }
        return false;
    }

    entries() {
        return new MapTupelIterator(this._keys, this._values);
    }

    forEach(callback) {
        const length = this._keys.length;
        for (let index = 0; index < length; index++) {
            callback(this._values[index], this._keys[index], this);
        }
    }

    get(key) {
        const index = this._keys.indexOf(key);
        if (index > -1) {
            return this._values[index];
        }
        return null;
    }

    has(key) {
        return this._keys.indexOf(key) > -1;
    }

    keys() {
        return new MapKeyIterator(this._keys);
    }

    set(key, value) {
        this._keys.push(key);
        this._values.push(value);
    }

    size() {
        return this._keys.length;
    }

    values() {
        return new MapValueIterator(this._values);
    }

    [Symbol.iterator]() {
        return this.entries();
    }

    reverse() {
        this._keys = this._keys.reverse();
        this._values = this._values.reverse();
        return this;
    }

    sort(compareFn) {
        return new Map([...this.entries()].sort(compareFn));
    }
}
exports.Map = Map;
//# sourceMappingURL=Map.js.map