import {PathType} from '@apibase/core';
import {Reference} from "./Reference/Reference";
import {CollectionReference} from "./Reference/CollectionReference";
import {DatabaseIndex, DatabaseInterface} from './DatabaseInterface';

export declare class Database implements DatabaseInterface {
    protected mapping: DatabaseIndex;
    protected depthLimit: number;
    constructor(mapping?: DatabaseIndex);

    delete(path?: PathType): Promise<boolean>;

    set(path: PathType, value: any): Promise<boolean>;

    get<T>(path?: PathType): Promise<T>;

    reference<ReferenceType = any>(path?: PathType): Reference<ReferenceType>;

    collection<ReferenceType = any>(path?: PathType): CollectionReference<ReferenceType>;
}
