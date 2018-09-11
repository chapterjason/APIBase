/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Snapshot} from "./Snapshot";
import {Map} from "@apibase/core";
import {CollectionIndex, Reference} from "../..";

export declare class CollectionSnapshot<SnapshotType = any> extends Snapshot<CollectionIndex<SnapshotType>> {
    protected map: Map<string, SnapshotType>;

    constructor(reference: Reference<CollectionIndex<SnapshotType>>, data: CollectionIndex<SnapshotType>);

    item(segment: string): Snapshot<SnapshotType>;

    forEach(callback: (childSnapshot: Snapshot<SnapshotType>) => void): void;

    length(): number;

    reverse(): void;

    sortByKey(): void;

    sortByProperty(property: string): void;
}
