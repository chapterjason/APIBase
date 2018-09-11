import {Reference} from "./Reference";
import {CollectionSnapshot} from "../..";
export interface CollectionIndex<ItemType = any> {
    [id: string]: ItemType;
}
export declare class CollectionReference<ReferenceType = any> extends Reference<CollectionIndex<ReferenceType>> {
    push(value?: ReferenceType): Reference<ReferenceType>;
    get(): CollectionSnapshot<ReferenceType>;
}
