import {ReferenceInterface} from "./Reference/ReferenceInterface";
import {CollectionReferenceInterface} from "./Reference/CollectionReferenceInterface";
import {Map, PathType} from "@apibase/core";
import {ChangeInterface} from "./Change/ChangeInterface";
import {DeleteChange} from "./Change/DeleteChange";
import {CreateChange} from "./Change/CreateChange";

export interface DatabaseIndex {
    [key: string]: any;
}

export interface DatabaseInterface {

    delete(path?: PathType): Promise<boolean>;

    set(path: PathType, value: any): Promise<boolean>;

    get<T>(path?: PathType): Promise<T>;

    reference<ReferenceType = any>(path?: PathType): ReferenceInterface<ReferenceType>;

    collection<ReferenceType = any>(path?: PathType): CollectionReferenceInterface<ReferenceType>;

    applyChanges(changes: Map<string, ChangeInterface>): Promise<void>;

    applySet(change: CreateChange): Promise<boolean>;

    applyDelete(change: DeleteChange): Promise<boolean>;

}