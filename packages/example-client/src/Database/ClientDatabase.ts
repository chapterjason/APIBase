import {Path} from "@apibase/core";
import {Database} from "@apibase/database";
import Axios, {AxiosPromise, AxiosResponse} from 'axios';

interface DatabaseResponse<Type> {
    success: boolean;
    result: Type;
}

export class ClientDatabase extends Database {

    protected service: string;

    public constructor(service: string) {
        super();
        this.service = service;
    }

    async delete(path: Path | string | string[]): Promise<boolean> {
        return this.handleResponse<boolean>(() => Axios.delete(this.getService(path)));
    }

    async set(path: Path | string | string[], value: any): Promise<boolean> {
        return this.handleResponse<boolean>(() => Axios.put<DatabaseResponse<boolean>>(this.getService(path), value));
    }

    async get<T>(path: Path | string | string[]): Promise<T> {
        return this.handleResponse<T>(() => Axios.get<DatabaseResponse<T>>(this.getService(path)));
    }

    protected async handleResponse<ResultType>(request: () => AxiosPromise<DatabaseResponse<ResultType>>) {
        return new Promise<ResultType>(async (resolve, reject) => {
            try {
                const response: AxiosResponse<DatabaseResponse<ResultType>> = await request();
                const data = response.data;
                if (data.success) {
                    resolve(data.result)
                } else {
                    reject(data.result);
                }
            } catch (error) {
                reject(false);
            }
        });
    }

    protected getService(path: Path | string | string[]) {
        return this.service.replace(/[\/]*$/m, '') + path.toString();
    }

}