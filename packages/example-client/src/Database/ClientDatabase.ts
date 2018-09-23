import {Logger, Map, Path} from "@apibase/core";
import {ChangeInterface, Database, DatabaseIndex} from "@apibase/database";
import Axios, {AxiosPromise, AxiosResponse} from 'axios';

interface DatabaseResponse<Type> {
    success: boolean;
    result: Type;
}

export class ClientDatabase extends Database {

    protected service: string;

    protected storageKey: string = 'database-v1';

    public constructor(service: string) {
        super();
        this.service = service;

        const mapping = localStorage.getItem(this.storageKey);
        if (mapping) {
            this.mapping = JSON.parse(mapping);
        }

        const changes = localStorage.getItem(this.storageKey + '-changes');
        if (changes) {
            this.changes = new Map<string, ChangeInterface>(JSON.parse(changes));
        }

        // this.syncLoop();
    }

    protected static async handleResponse<ResultType>(request: () => AxiosPromise<DatabaseResponse<ResultType>>) {
        const response: AxiosResponse<DatabaseResponse<ResultType>> = await request();
        const data = response.data;
        if (data.success) {
            return data.result;
        } else {
            throw new Error(data.result as any);
        }
    }

    public async delete(path?: Path | string | string[]): Promise<boolean> {
        const result = await super.delete(path);
        this.updateLocalStorage();
        return result;
    }

    public async set(path: Path | string | string[], value: any): Promise<boolean> {
        const result = await super.set(path, value);
        this.updateLocalStorage();
        return result;
    }

    public async syncLoop(callback?: () => void) {
        try {
            await this.sync();

            Logger.debug('Synchronized!');

            if (callback) {
                callback();
            }

        } catch (error) {
            Logger.error(error);
        }
    }

    protected getHistory() {
        const history = [];
        for (let pair of this.changes.entries()) {
            history.push(pair);
        }
        return history;
    }

    protected updateLocalStorage() {
        /**
         * Save the local database and the changes to the localStorage
         */
        {
            localStorage.setItem(this.storageKey, JSON.stringify(this.mapping));
            localStorage.setItem(this.storageKey + '-changes', JSON.stringify(this.getHistory()));
        }
    }

    protected async sync() {
        try {
            this.mapping = await this._sync();
            this.changes.clear();
        } catch (error) {
            Logger.error(error);
        } finally {
            this.updateLocalStorage();
        }
    }

    protected async _delete(path: Path | string | string[]): Promise<boolean> {
        return ClientDatabase.handleResponse<boolean>(() => Axios.delete(this.getService(path)));
    }

    protected async _set(path: Path | string | string[], value: any): Promise<boolean> {
        return ClientDatabase.handleResponse<boolean>(() => Axios.put<DatabaseResponse<boolean>>(this.getService(path), value));
    }

    protected async _get<T>(path: Path | string | string[]): Promise<T> {
        return ClientDatabase.handleResponse<T>(() => Axios.get<DatabaseResponse<T>>(this.getService(path)));
    }

    protected async _sync(): Promise<DatabaseIndex> {
        return ClientDatabase.handleResponse<DatabaseIndex>(() => Axios.post<DatabaseResponse<DatabaseIndex>>(this.getService('/'), this.getHistory()));
    }

    protected getService(path: Path | string | string[]) {
        return this.service.replace(/[\/]*$/m, '') + path.toString();
    }

}