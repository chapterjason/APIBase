import {Path} from "@apibase/core";
import {CollectionReferenceInterface} from "./CollectionReferenceInterface";
import {SnapshotInterface} from "../..";

export interface ReferenceJSON {
    path: string,
    value: any
}

export interface ReferenceInterface<ReferenceType> {

    getPath(): Path;
    
    key(): string;

    toJSON(): Promise<ReferenceJSON>;

    parent<ParentReferenceType = any>(): ReferenceInterface<ParentReferenceType> | null;

    reference<ReferenceType = any>(segment: string): ReferenceInterface<ReferenceType>;

    collection<ReferenceType = any>(segment: string): CollectionReferenceInterface<ReferenceType>;

    set(value: ReferenceType): Promise<boolean>;

    get(): Promise<SnapshotInterface<ReferenceType>>;

    delete(): Promise<boolean>;


}