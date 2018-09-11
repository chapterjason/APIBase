import {Path} from '@apibase/core';
import {Reference} from "./Reference/Reference";
import {CollectionReference} from "./Reference/CollectionReference";
export interface DatabaseIndex {
    [key: string]: any;
}
export declare class Database {
    protected mapping: DatabaseIndex;
    protected depthLimit: number;
    constructor(mapping?: DatabaseIndex);
    getPath(): Path;
    getPath(segments: string[]): Path;
    getPath(path: string): Path;
    getPath(path: Path): Path;
    delete(): boolean;
    delete(segments: string[]): boolean;
    delete(path: string): boolean;
    delete(path: Path): boolean;
    set(segments: string[], value: any): this;
    set(path: string, value: any): this;
    set(path: Path, value: any): this;
    get<T>(): T;
    get<T>(segments: string[]): T;
    get<T>(path: string): T;
    get<T>(path: Path): T;
    reference<ReferenceType = any>(): Reference<ReferenceType>;
    reference<ReferenceType = any>(segments: string[]): Reference<ReferenceType>;
    reference<ReferenceType = any>(path: string): Reference<ReferenceType>;
    reference<ReferenceType = any>(path: Path): Reference<ReferenceType>;
    collection<ReferenceType = any>(): CollectionReference<ReferenceType>;
    collection<ReferenceType = any>(segments: string[]): CollectionReference<ReferenceType>;
    collection<ReferenceType = any>(path: string): CollectionReference<ReferenceType>;
    collection<ReferenceType = any>(path: Path): CollectionReference<ReferenceType>;
}
