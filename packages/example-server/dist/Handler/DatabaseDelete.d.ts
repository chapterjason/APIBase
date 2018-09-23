import {DatabaseInterface} from "@apibase/database";

export declare function DatabaseDelete(database: DatabaseInterface, save: () => Promise<void>): (request: any, response: any, next: any) => Promise<void>;
