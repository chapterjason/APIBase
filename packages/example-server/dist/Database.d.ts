import {Database} from "@apibase/database";

export declare const database: Database;

export declare function load(): Promise<boolean>;

export declare function save(): Promise<void>;
