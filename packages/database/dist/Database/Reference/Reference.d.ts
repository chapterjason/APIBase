import {Database} from "../Database";
import {CollectionReference, Snapshot} from "../..";
import {Path} from "@apibase/core";
export declare class Reference<ReferenceType = any> {
    protected database: Database;
    protected path: Path;
    constructor(database: Database, path: Path);
    getPath(): Path;
    key(): string;
    toJSON(): {
        path: string;
        value: ReferenceType;
    };
    parent<ParentReferenceType = any>(): Reference<ParentReferenceType> | null;
    reference<ReferenceType = any>(segment: string): Reference<ReferenceType>;
    collection<ReferenceType = any>(segment: string): CollectionReference<ReferenceType>;
    set(value: ReferenceType): this;
    get(): Snapshot<ReferenceType>;
    delete(): this;
}
