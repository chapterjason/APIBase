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
import {SnapshotInterface} from "./SnapshotInterface";
import {isObject, Map} from "@apibase/core";
import {Snapshot} from "./Snapshot";

export class CollectionSnapshot<SnapshotType = any> extends Snapshot<CollectionIndex<SnapshotType>> implements CollectionSnapshotInterface<SnapshotType> {

    protected map: Map<string, SnapshotType>;

    constructor(reference: ReferenceInterface<CollectionIndex<SnapshotType>>, data: CollectionIndex<SnapshotType>) {
        super(reference, data);

        const map: Map<string, SnapshotType> = new Map<string, SnapshotType>();
        if (isObject(data)) {
            const keys = Object.keys(data);

            for (let key of keys) {
                map.set(key, data[key]);
            }
        } else if (Array.isArray(data)) {
            for (let key in data) {
                map.set(key, data[key]);
            }
        } else {
            throw new Error('The data at "' + reference.getPath().toString() + '" must be of type object or array.');
        }

        this.map = map;
    }

    public item(segment: string): SnapshotInterface<SnapshotType> {
        return new Snapshot<SnapshotType>(this.reference.reference<SnapshotType>(segment), this.map.get(segment));
    }

    public forEach(callback: (snapshot: SnapshotInterface<SnapshotType>) => void): this {
        for (let key of this.map.keys()) {
            callback(this.item(key));
        }

        return this;
    }

    public length() {
        return this.map.size();
    }

    public reverse(): this {
        this.map.reverse();

        return this;
    }

    public sortByKey(): this {
        this.map = this.map.sort((a, b) => {
            return a[0].localeCompare(b[0]);
        });

        return this;
    }

    public sortByProperty(property: string): this {
        this.map = this.map.sort((a, b) => {
            return a[1][property].localeCompare(b[1][property]);
        });

        return this;
    }

}