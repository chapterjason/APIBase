import {Path} from "@apibase/core";
import {DatabaseInterface} from "@apibase/database";
import { ClientCollectionReference } from "./Reference/ClientCollectionReference";
import { ClientReference } from "./Reference/ClientReference";
import {AxiosResponse} from 'axios';
import Axios from 'axios';

interface DatabaseResponse<Type> {
    success: boolean;
    result: Type;
}

export class ClientDatabase implements DatabaseInterface {

    protected service: string;

    public constructor(service: string) {
        this.service = service;
    }

    async delete(path: Path | string | string[]): Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            try {
                const response: AxiosResponse<DatabaseResponse<boolean>> = await Axios.delete(this.getService(path));
                const data = response.data;
                if(data.success){
                    resolve(data.result)
                }else{
                    reject(data.result);
                }
            }catch(error){
                reject(false);
            }
        });
    }

    async set(path: Path | string | string[], value: any): Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            try {
                const response: AxiosResponse<DatabaseResponse<boolean>> = await Axios.put(this.getService(path), value);
                const data = response.data;
                if(data.success){
                    resolve(data.result)
                }else{
                    reject(data.result);
                }
            }catch(error){
                reject(false);
            }
        });
    }

    async get<T>(path: Path | string | string[]): Promise<T> {
        return new Promise<T>(async (resolve, reject) => {
            try {
                const response: AxiosResponse<DatabaseResponse<T>> = await Axios.get(this.getService(path));
                const data = response.data;
                if(data.success){
                    resolve(data.result)
                }else{
                    reject(data.result);
                }
            }catch(error){
                reject(error);
            }
        });
    }

    public reference<ReferenceType = any>(path: Path | string | string[]): ClientReference<ReferenceType> {
        return new ClientReference(this, Path.ensurePath(path));
    }

    public collection<ReferenceType = any>(path: Path | string | string[]): ClientCollectionReference<ReferenceType> {
        return new ClientCollectionReference(this, Path.ensurePath(path));
    
    }

    protected getService(path: Path | string | string[]) {
        return this.service.replace(/[\/]*$/m, '') + path.toString();
    }

}