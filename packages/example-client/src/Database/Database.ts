import {Database, ReferenceInterface, CollectionReferenceInterface} from "@apibase/database";
import {createdAt, Logger, Path} from "@apibase/core";
import Axios from "axios";

export class ClientDatabase extends Database {

    protected service: string;

    public constructor(service: string) {
        super();

        this.service = service;
    }

    

    // public get<T>(): Promise<T>;
    // public get<T>(segments: string[]): Promise<T>;
    // public get<T>(path: string): Promise<T>;
    // public get<T>(path: Path): Promise<T>;
    // public get<T>(path: any = []): Promise<T> {
    //     path = this.getPath(path);

    //     return Axios
    //         .get(this.service + path.toString())
    //         .then((response) => {
    //             if (response.data.success) {
    //                 return response.data.result as T;
    //             } else {
    //                 throw new Error(response.data.result);
    //             }
    //         });
    // }

}