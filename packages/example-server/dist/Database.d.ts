import {ChangeInterface, Database} from "@apibase/database";
import {MapTupel} from "@apibase/core";

export declare const database: Database;

export declare function load(): Promise<void>;
export declare function save(): Promise<void>;

declare type SyncData = MapTupel<string, ChangeData>;

interface ChangeData {
    path: {
        segments: string[];
    };
    timestamp: string;
    value?: any;
}

export declare function convertToTupelArray(data: Array<SyncData>): [string, ChangeInterface][];

export {};
