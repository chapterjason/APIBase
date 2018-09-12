import {CollectionIndex, ReferenceInterface} from "../..";
import {CollectionSnapshotInterface} from "./CollectionSnapshotInterface";
import {SnapshotInterface} from "./SnapshotInterface";
import {Map} from "@apibase/core";
import {Snapshot} from "./Snapshot";

export declare class CollectionSnapshot<SnapshotType = any> extends Snapshot<CollectionIndex<SnapshotType>> implements CollectionSnapshotInterface<SnapshotType> {
    protected map: Map<string, SnapshotType>;
    constructor(reference: ReferenceInterface<CollectionIndex<SnapshotType>>, data: CollectionIndex<SnapshotType>);
    item(segment: string): SnapshotInterface<SnapshotType>;
    forEach(callback: (snapshot: SnapshotInterface<SnapshotType>) => void): this;
    length(): number;
    reverse(): this;
    sortByKey(): this;
    sortByProperty(property: string): this;
}
