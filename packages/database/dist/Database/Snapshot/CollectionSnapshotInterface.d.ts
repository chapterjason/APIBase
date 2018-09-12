import { SnapshotInterface } from "./Snapshotinterface";
import { CollectionIndex } from "../Reference/CollectionReferenceInterface";
export interface CollectionSnapshotInterface<SnapshotType = any> extends SnapshotInterface<CollectionIndex<SnapshotType>> {
    item(segment: string): SnapshotInterface<SnapshotType>;
    forEach(callback: (childSnapshot: SnapshotInterface<SnapshotType>) => void): this;
    length(): number;
    reverse(): this;
    sortByKey(): this;
    sortByProperty(property: string): this;
}
