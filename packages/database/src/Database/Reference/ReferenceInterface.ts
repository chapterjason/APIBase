import { Database } from "../..";
import { Path } from "@apibase/core";
import { CollectionReferenceInterface } from "./CollectionReferenceInterface";
import { SnapshotInterface } from "../Snapshot/Snapshotinterface";

export interface ReferenceInterface<ReferenceType> {

    getPath(): Path;
    
    key(): string;

    toJSON(): { path: string, value: any };

    parent<ParentReferenceType = any>(): ReferenceInterface<ParentReferenceType> | null;

    reference<ReferenceType = any>(segment: string): ReferenceInterface<ReferenceType>;

    collection<ReferenceType = any>(segment: string): CollectionReferenceInterface<ReferenceType>;

    set(value: ReferenceType): this;
    
    get(): SnapshotInterface<ReferenceType>;

    delete(): this;


}