import {EventEmitter, EventHandlerType, Map, Path, PathType} from '@apibase/core';
import {Reference} from "./Reference/Reference";
import {CollectionReference} from "./Reference/CollectionReference";
import {DatabaseIndex, DatabaseInterface} from './DatabaseInterface';
import {DeleteChange} from "./Change/DeleteChange";
import {CreateChange} from "./Change/CreateChange";
import {ChangeInterface} from "./Change/ChangeInterface";
import {UpdateChange} from "./Change/UpdateChange";

export declare class Database implements DatabaseInterface {
    protected original: DatabaseIndex;
    protected mapping: DatabaseIndex;
    protected depthLimit: number;
    protected changes: Map<string, ChangeInterface>;
    protected eventEmitters: {
        [path: string]: EventEmitter;
    };
    constructor(mapping?: DatabaseIndex);
    getMapping(): Promise<DatabaseIndex>;
    getChanges(): Promise<Map<string, ChangeInterface>>;

    on(event: "create", path: PathType, callback: EventHandlerType): any;
    on(event: "update", path: PathType, callback: EventHandlerType): any;
    on(event: "delete", path: PathType, callback: EventHandlerType): any;

    once(event: "create", path: PathType, callback: EventHandlerType): any;
    once(event: "update", path: PathType, callback: EventHandlerType): any;
    once(event: "delete", path: PathType, callback: EventHandlerType): any;

    off(callback: EventHandlerType): void;
    applyChanges(changes: Map<string, ChangeInterface>): Promise<void>;
    delete(path?: PathType): Promise<boolean>;
    set(path: PathType, value: any): Promise<boolean>;

    applySet(change: CreateChange | UpdateChange): Promise<boolean>;
    get<T>(path?: PathType): Promise<T>;
    reference<ReferenceType = any>(path?: PathType): Reference<ReferenceType>;
    collection<ReferenceType = any>(path?: PathType): CollectionReference<ReferenceType>;
    applyDelete(change: DeleteChange): Promise<boolean>;

    protected getEventEmitters(path: Path): EventEmitter[];
    protected cleanupChanges(): void;
}
