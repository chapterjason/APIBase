import { CollectionReference, Snapshot } from "../..";
import { Path } from "@apibase/core";
import { ReferenceInterface, ReferenceJSON } from "./ReferenceInterface";
import { Database } from "../Database";
export declare class Reference<ReferenceType = any> implements ReferenceInterface<ReferenceType> {
    protected database: Database;
    protected path: Path;
    constructor(database: Database, path: Path);
    getPath(): Path;
    key(): string;
    toJSON(): ReferenceJSON;
    parent<ParentReferenceType = any>(): Reference<ParentReferenceType> | null;
    reference<ReferenceType = any>(segment: string): Reference<ReferenceType>;
    collection<ReferenceType = any>(segment: string): CollectionReference<ReferenceType>;
    set(value: ReferenceType): boolean;
    get(): Snapshot<ReferenceType>;
    delete(): boolean;
}
