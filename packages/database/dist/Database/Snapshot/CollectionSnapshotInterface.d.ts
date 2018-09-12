import {SnapshotInterface} from "./SnapshotInterface";
import {CollectionIndex} from "../..";

export interface CollectionSnapshotInterface<SnapshotType = any> extends SnapshotInterface<CollectionIndex<SnapshotType>> {
    item(segment: string): SnapshotInterface<SnapshotType>;

    forEach(callback: (snapshot: SnapshotInterface<SnapshotType>) => void): this;
    length(): number;
    reverse(): this;
    sortByKey(): this;
    sortByProperty(property: string): this;
}
