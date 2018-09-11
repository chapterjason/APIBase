/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Snapshot} from "./Snapshot";
import {Map, isObject} from "@apibase/core";
import {CollectionIndex, Reference} from "../..";

export class CollectionSnapshot<SnapshotType = any> extends Snapshot<CollectionIndex<SnapshotType>> {

    protected map: Map<string, SnapshotType>;

    constructor(reference: Reference<CollectionIndex<SnapshotType>>, data: CollectionIndex<SnapshotType>) {
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
        }

        this.map = map;
    }

    public item(segment: string): Snapshot<SnapshotType> {
        return this.database.reference<SnapshotType>(segment).get();
    }

    public forEach(callback: (childSnapshot: Snapshot<SnapshotType>) => void) {
        for (let key of this.map.keys()) {
            callback(this.item(key));
        }
    }

    public length() {
        return this.map.size();
    }

    public reverse() {
        this.map.reverse();
    }

    public sortByKey() {
        this.map = this.map.sort((a, b) => {
            return a[0].localeCompare(b[0]);
        });
    }

    public sortByProperty(property: string) {
        this.map = this.map.sort((a, b) => {
            return a[1][property].localeCompare(b[1][property]);
        });
    }

}