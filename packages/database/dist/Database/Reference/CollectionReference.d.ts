import {Reference} from "./Reference";
import {CollectionSnapshot} from "../..";
import {CollectionIndex, CollectionReferenceInterface} from "./CollectionReferenceInterface";

export declare class CollectionReference<ReferenceType = any> extends Reference<CollectionIndex<ReferenceType>> implements CollectionReferenceInterface<ReferenceType> {
    push(value?: ReferenceType): Promise<Reference<ReferenceType>>;
    get(): Promise<CollectionSnapshot<ReferenceType>>;
}
