import {ReferenceInterface} from "./ReferenceInterface";
import {CollectionSnapshotInterface} from "../..";

export interface CollectionIndex<ItemType = any> {
    [id: string]: ItemType;
}
export interface CollectionReferenceInterface<ReferenceType = any> extends ReferenceInterface<CollectionIndex<ReferenceType>> {
    push(value?: ReferenceType): Promise<ReferenceInterface<ReferenceType>>;

    get(): Promise<CollectionSnapshotInterface<ReferenceType>>;
}
