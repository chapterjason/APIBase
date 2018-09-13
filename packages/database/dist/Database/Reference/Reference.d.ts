import {DatabaseInterface, SnapshotInterface} from "../..";
import {Path} from "@apibase/core";
import {ReferenceInterface} from "./ReferenceInterface";
import {CollectionReferenceInterface} from "./CollectionReferenceInterface";

export declare class Reference<ReferenceType = any> implements ReferenceInterface<ReferenceType> {
    protected database: DatabaseInterface;
    protected path: Path;

    constructor(database: DatabaseInterface, path: Path);
    getPath(): Path;
    key(): string;
    toJSON(): {
        path: string;
        value: any;
    };
    parent<ParentReferenceType = any>(): ReferenceInterface<ParentReferenceType> | null;
    reference<ReferenceType = any>(segment: string): ReferenceInterface<ReferenceType>;
    collection<ReferenceType = any>(segment: string): CollectionReferenceInterface<ReferenceType>;
    set(value: ReferenceType): this;
    get(): SnapshotInterface<ReferenceType>;
    delete(): this;
}
