import {Path} from '@apibase/core';
import {Reference} from "./Reference/Reference";
import {CollectionReference} from "./Reference/CollectionReference";
import {DatabaseIndex, DatabaseInterface} from './DatabaseInterface';

export declare class Database implements DatabaseInterface {
    protected mapping: DatabaseIndex;
    protected depthLimit: number;
    constructor(mapping?: DatabaseIndex);

    delete(path?: Path | string | string[]): Promise<boolean>;

    set(path: Path | string | string[], value: any): Promise<boolean>;

    get<T>(path?: Path | string | string[]): Promise<T>;
    reference<ReferenceType = any>(path?: Path | string | string[]): Reference<ReferenceType>;
    collection<ReferenceType = any>(path?: Path | string | string[]): CollectionReference<ReferenceType>;
}
