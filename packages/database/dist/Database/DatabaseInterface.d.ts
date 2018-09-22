import {ReferenceInterface} from "./Reference/ReferenceInterface";
import {CollectionReferenceInterface} from "./Reference/CollectionReferenceInterface";
import {PathType} from "@apibase/core";

export declare enum ChangeType {
    SET = 0,
    DELETE = 1
}
export interface Change {
    path: string;
    type: ChangeType;
    value?: any;
}
export interface DatabaseIndex {
    [key: string]: any;
}
export interface DatabaseInterface {
    delete(path?: PathType): Promise<boolean>;

    set(path: PathType, value: any): Promise<boolean>;

    get<T>(path?: PathType): Promise<T>;

    reference<ReferenceType = any>(path?: PathType): ReferenceInterface<ReferenceType>;

    collection<ReferenceType = any>(path?: PathType): CollectionReferenceInterface<ReferenceType>;
}
