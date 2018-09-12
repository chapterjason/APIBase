import { ReferenceInterface } from "./Reference/ReferenceInterface";
import { CollectionReferenceInterface } from "./Reference/CollectionReferenceInterface";
import { Path } from "@apibase/core";

export interface DatabaseIndex {
    [key: string]: any;
}


export interface DatabaseInterface {

    getPath(): Path;
    getPath(segments: string[]): Path;
    getPath(path: string): Path;
    getPath(path: Path): Path;

    delete(): boolean;
    delete(segments: string[]): boolean;
    delete(path: string): boolean;
    delete(path: Path): boolean;

    set(segments: string[], value: any): boolean;
    set(path: string, value: any): boolean;
    set(path: Path, value: any): boolean;

    get<T>(): T;
    get<T>(segments: string[]): T;
    get<T>(path: string): T;
    get<T>(path: Path): T;

    reference<ReferenceType = any>(): ReferenceInterface<ReferenceType>;
    reference<ReferenceType = any>(segments: string[]): ReferenceInterface<ReferenceType>;
    reference<ReferenceType = any>(path: string): ReferenceInterface<ReferenceType>;
    reference<ReferenceType = any>(path: Path): ReferenceInterface<ReferenceType>;

    collection<ReferenceType = any>(): CollectionReferenceInterface<ReferenceType>;
    collection<ReferenceType = any>(segments: string[]): CollectionReferenceInterface<ReferenceType>;
    collection<ReferenceType = any>(path: string): CollectionReferenceInterface<ReferenceType>;
    collection<ReferenceType = any>(path: Path): CollectionReferenceInterface<ReferenceType>;

}