import {DatabaseInterface} from "@apibase/database";

export declare function DatabaseSync(database: DatabaseInterface, save: () => Promise<void>): (request: any, response: any, next: any) => Promise<void>;
