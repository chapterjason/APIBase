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
const core_1 = require("@apibase/core");
const Snapshot_1 = require("./Snapshot");
class CollectionSnapshot extends Snapshot_1.Snapshot {
    constructor(reference, data) {
        super(reference, data);
        this._map = new core_1.Map();
        if (core_1.isObject(data)) {
            const keys = Object.keys(data);
            for (let key of keys) {
                this._map.set(key, data[key]);
            }
        }
        else if (Array.isArray(data)) {
            for (let key in data) {
                this._map.set(key, data[key]);
            }
        }
        else {
            throw new Error('The data at "' + reference.getPath().toString() + '" must be of type object or array.');
        }
    }
    item(segment) {
        return new Snapshot_1.Snapshot(this.reference.reference(segment), this._map.get(segment));
    }
    forEach(callback) {
        for (let key of this._map.keys()) {
            callback(this.item(key));
        }
        return this;
    }
    map(callback) {
        const items = [];
        for (let key of this._map.keys()) {
            items.push(callback(this.item(key)));
        }
        return items;
    }
    length() {
        return this._map.size();
    }
    reverse() {
        this._map.reverse();
        return this;
    }
    sortByKey() {
        this._map = this._map.sort((a, b) => {
            return a[0].localeCompare(b[0]);
        });
        return this;
    }
    sortByProperty(property) {
        this._map = this._map.sort((a, b) => {
            return a[1][property].localeCompare(b[1][property]);
        });
        return this;
    }
    sort(compare) {
        this._map = this._map.sort(compare);
        return this;
    }
}
exports.CollectionSnapshot = CollectionSnapshot;
//# sourceMappingURL=CollectionSnapshot.js.map