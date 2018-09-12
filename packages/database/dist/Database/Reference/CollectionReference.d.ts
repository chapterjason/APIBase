import { Reference } from "./Reference";
import { CollectionIndex, CollectionReferenceInterface } from "./CollectionReferenceInterface";
import { CollectionSnapshotInterface } from "../Snapshot/CollectionSnapshotInterface";
import { ReferenceInterface } from "./ReferenceInterface";
export declare class CollectionReference<ReferenceType = any> extends Reference<CollectionIndex<ReferenceType>> implements CollectionReferenceInterface<ReferenceType> {
    push(value?: ReferenceType): ReferenceInterface<ReferenceType>;
    get(): CollectionSnapshotInterface<ReferenceType>;
}
