import {Path} from '@apibase/core';
import {ReferenceInterface} from './Reference/ReferenceInterface';
import {CollectionReferenceInterface} from './Reference/CollectionReferenceInterface';
import {DatabaseIndex, DatabaseInterface} from './DatabaseInterface';

export declare class Database implements DatabaseInterface {
    protected mapping: DatabaseIndex;
    protected depthLimit: number;
    constructor(mapping?: DatabaseIndex);
    delete(path?: Path | string | string[]): boolean;
    set(path: Path | string | string[], value: any): boolean;
    get<T>(path?: Path | string | string[]): T;
    reference<ReferenceType = any>(path?: Path | string | string[]): ReferenceInterface<ReferenceType>;
    collection<ReferenceType = any>(path?: Path | string | string[]): CollectionReferenceInterface<ReferenceType>;
}
