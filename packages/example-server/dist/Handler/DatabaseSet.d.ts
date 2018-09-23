import {DatabaseInterface} from "@apibase/database";

export declare function DatabaseSet(database: DatabaseInterface, save: () => Promise<void>): (request: any, response: any, next: any) => Promise<void>;
