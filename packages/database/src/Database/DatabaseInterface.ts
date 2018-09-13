import {ReferenceInterface} from "./Reference/ReferenceInterface";
import {CollectionReferenceInterface} from "./Reference/CollectionReferenceInterface";
import {Path} from "@apibase/core";

export interface DatabaseIndex {
    [key: string]: any;
}

export interface DatabaseInterface {

    delete(path?: Path | string | string[]): boolean;

    set(path: Path | string | string[], value: any): boolean;

    get<T>(path?: Path | string | string[]): T;

    reference<ReferenceType = any>(path?: Path | string | string[]): ReferenceInterface<ReferenceType>;

    collection<ReferenceType = any>(path?: Path | string | string[]): CollectionReferenceInterface<ReferenceType>;

}