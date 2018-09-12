import { ReferenceInterface } from "./ReferenceInterface";
import { CollectionSnapshotInterface } from "../Snapshot/CollectionSnapshotInterface";

export interface CollectionIndex<ItemType = any> {
    [id: string]: ItemType;
}

export interface CollectionReferenceInterface<ReferenceType = any> extends ReferenceInterface<CollectionIndex<ReferenceType>> {

    push(value?: ReferenceType): ReferenceInterface<ReferenceType>;

    get(): CollectionSnapshotInterface<ReferenceType>;
    
}