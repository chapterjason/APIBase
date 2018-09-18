/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {CollectionIndex, ReferenceInterface} from "../..";
import {CollectionSnapshotInterface} from "./CollectionSnapshotInterface";
import {isObject, Map, MapTupel} from "@apibase/core";
import {Snapshot} from "./Snapshot";

export class CollectionSnapshot<SnapshotType = any> extends Snapshot<CollectionIndex<SnapshotType>> implements CollectionSnapshotInterface<SnapshotType> {

    protected _map: Map<string, SnapshotType>;

    constructor(reference: ReferenceInterface<CollectionIndex<SnapshotType>>, data: CollectionIndex<SnapshotType>) {
        super(reference, data);

        this._map = new Map<string, SnapshotType>();
        if (isObject(data)) {
            const keys = Object.keys(data);

            for (let key of keys) {
                this._map.set(key, data[key]);
            }
        } else if (Array.isArray(data)) {
            for (let key in data) {
                this._map.set(key, data[key]);
            }
        } else {
            throw new Error('The data at "' + reference.getPath().toString() + '" must be of type object or array.');
        }
    }

    public item(segment: string): Snapshot<SnapshotType> {
        return new Snapshot<SnapshotType>(this.reference.reference<SnapshotType>(segment), this._map.get(segment));
    }

    public forEach(callback: (snapshot: Snapshot<SnapshotType>) => void): this {
        for (let key of this._map.keys()) {
            callback(this.item(key));
        }

        return this;
    }

    public map<Type = any>(callback: (snapshot: Snapshot<SnapshotType>) => Type): Type[] {
        const items: Type[] = [];

        for (let key of this._map.keys()) {
            items.push(callback(this.item(key)));
        }

        return items;
    }

    public length() {
        return this._map.size();
    }

    public reverse(): this {
        this._map.reverse();

        return this;
    }

    public sortByKey(): this {
        this._map = this._map.sort((a, b) => {
            return a[0].localeCompare(b[0]);
        });

        return this;
    }

    public sortByProperty(property: string): this {
        this._map = this._map.sort((a, b) => {
            return a[1][property].localeCompare(b[1][property]);
        });

        return this;
    }

    public sort(compare: (a: MapTupel<string, SnapshotType>, b: MapTupel<string, SnapshotType>) => number): this {
        this._map = this._map.sort(compare);

        return this;
    }

}