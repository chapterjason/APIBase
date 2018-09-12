import { Snapshot } from "./Snapshot";
import { Map } from "@apibase/core";
import { CollectionIndex } from "../Reference/CollectionReferenceInterface";
import { ReferenceInterface } from "../Reference/ReferenceInterface";
import { SnapshotInterface } from "./Snapshotinterface";
import { CollectionSnapshotInterface } from "./CollectionSnapshotInterface";
export declare class CollectionSnapshot<SnapshotType = any> extends Snapshot<CollectionIndex<SnapshotType>> implements CollectionSnapshotInterface<SnapshotType> {
    protected map: Map<string, SnapshotType>;
    constructor(reference: ReferenceInterface<CollectionIndex<SnapshotType>>, data: CollectionIndex<SnapshotType>);
    item(segment: string): SnapshotInterface<SnapshotType>;
    forEach(callback: (childSnapshot: SnapshotInterface<SnapshotType>) => void): this;
    length(): number;
    reverse(): this;
    sortByKey(): this;
    sortByProperty(property: string): this;
}
