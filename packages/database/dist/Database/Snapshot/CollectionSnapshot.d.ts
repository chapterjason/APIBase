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
