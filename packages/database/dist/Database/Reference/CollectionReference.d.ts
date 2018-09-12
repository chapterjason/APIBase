import {Reference} from "./Reference";
import {CollectionSnapshotInterface} from "../..";
import {CollectionIndex, CollectionReferenceInterface} from "./CollectionReferenceInterface";
import {ReferenceInterface} from "./ReferenceInterface";

export declare class CollectionReference<ReferenceType = any> extends Reference<CollectionIndex<ReferenceType>> implements CollectionReferenceInterface<ReferenceType> {
    push(value?: ReferenceType): ReferenceInterface<ReferenceType>;
    get(): CollectionSnapshotInterface<ReferenceType>;
}
