import { Path } from "@apibase/core";
import { CollectionReferenceInterface } from "./CollectionReferenceInterface";
import { SnapshotInterface } from "../..";
export interface ReferenceJSON {
    path: string;
    value: any;
}
export interface ReferenceInterface<ReferenceType> {
    getPath(): Path;
    key(): string;
    toJSON(): ReferenceJSON | Promise<ReferenceJSON>;
    parent<ParentReferenceType = any>(): ReferenceInterface<ParentReferenceType> | null;
    reference<ReferenceType = any>(segment: string): ReferenceInterface<ReferenceType>;
    collection<ReferenceType = any>(segment: string): CollectionReferenceInterface<ReferenceType>;
    set(value: ReferenceType): boolean | Promise<boolean>;
    get(): SnapshotInterface<ReferenceType> | Promise<SnapshotInterface<ReferenceType>>;
    delete(): boolean | Promise<boolean>;
}
