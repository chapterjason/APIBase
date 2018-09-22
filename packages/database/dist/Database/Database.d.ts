import {Map, PathType} from '@apibase/core';
import {Reference} from "./Reference/Reference";
import {CollectionReference} from "./Reference/CollectionReference";
import {DatabaseIndex, DatabaseInterface} from './DatabaseInterface';
import {DeleteChange} from "./Change/DeleteChange";
import {SetChange} from "./Change/SetChange";
import {ChangeInterface} from "./Change/ChangeInterface";

export declare class Database implements DatabaseInterface {
    protected original: DatabaseIndex;
    protected mapping: DatabaseIndex;
    protected depthLimit: number;
    protected changes: Map<string, ChangeInterface>;
    constructor(mapping?: DatabaseIndex);

    getMapping(): Promise<DatabaseIndex>;

    getChanges(): Promise<Map<string, ChangeInterface>>;

    applyChanges(changes: Map<string, ChangeInterface>): Promise<void>;
    delete(path?: PathType): Promise<boolean>;
    set(path: PathType, value: any): Promise<boolean>;

    applySet(change: SetChange): Promise<boolean>;
    get<T>(path?: PathType): Promise<T>;
    reference<ReferenceType = any>(path?: PathType): Reference<ReferenceType>;
    collection<ReferenceType = any>(path?: PathType): CollectionReference<ReferenceType>;

    protected applyDelete(change: DeleteChange): Promise<boolean>;
}
