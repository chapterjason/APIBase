import { CollectionIndex, ReferenceInterface } from "../..";
import { CollectionSnapshotInterface } from "./CollectionSnapshotInterface";
import { Map, MapTupel } from "@apibase/core";
import { Snapshot } from "./Snapshot";
export declare class CollectionSnapshot<SnapshotType = any> extends Snapshot<CollectionIndex<SnapshotType>> implements CollectionSnapshotInterface<SnapshotType> {
    protected map: Map<string, SnapshotType>;
    constructor(reference: ReferenceInterface<CollectionIndex<SnapshotType>>, data: CollectionIndex<SnapshotType>);
    item(segment: string): Snapshot<SnapshotType>;
    forEach(callback: (snapshot: Snapshot<SnapshotType>) => void): this;
    length(): number;
    reverse(): this;
    sortByKey(): this;
    sortByProperty(property: string): this;
    sort(compare: (a: MapTupel<string, SnapshotType>, b: MapTupel<string, SnapshotType>) => number): this;
}
