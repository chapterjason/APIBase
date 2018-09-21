import {Logger, Path} from "@apibase/core";
import {Change, ChangeType, Database} from "@apibase/database";
import Axios, {AxiosPromise, AxiosResponse} from 'axios';

interface DatabaseResponse<Type> {
    success: boolean;
    result: Type;
}

export class ClientDatabase extends Database {

    protected service: string;
    protected changes: Change[] = [];
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
            this.changes = JSON.parse(changes);
        }

        this.syncLoop();
    }

    delete(path?: Path | string | string[]): Promise<boolean> {
        this.changes.push({type: ChangeType.DELETE, path: Path.ensurePath(path).toString()});
        const result = super.delete(path);
        this.updateLocalStorage();
        return result;
    }

    set(path: Path | string | string[], value: any): Promise<boolean> {
        this.changes.push({type: ChangeType.SET, value: value, path: Path.ensurePath(path).toString()});
        const result = super.set(path, value);
        this.updateLocalStorage();
        return result;
    }

    public syncLoop(callback?: () => void) {
        this.sync()
            .then(() => {
                Logger.debug('Synchronized!');
                if (callback) {
                    callback();
                }
            })
            .catch(error => {
                Logger.error(error);
            });
    }

    protected updateLocalStorage() {
        /**
         * Save the local database and the changes to the localStorage
         */
        {
            localStorage.setItem(this.storageKey, JSON.stringify(this.mapping));
            localStorage.setItem(this.storageKey + '-changes', JSON.stringify(this.changes));
        }
    }

    protected async sync() {
        try {
            this.mapping = await this._sync();
            this.changes = [];
        } catch (error) {
            Logger.error(error);
        } finally {

            /**
             * Get the current master server data
             *
             * reapply changes to be at the newest
             */
            {
                try {
                    this.mapping = await this._get('/');

                    for (let i = 0; i < this.changes.length; i++) {
                        const change = this.changes[i];

                        if (change.type === ChangeType.SET) {
                            await super.set(change.path, change.value);
                        } else if (change.type === ChangeType.DELETE) {
                            await super.delete(change.path);
                        }
                    }
                } catch (error) {
                    Logger.error(error);
                }
            }

            this.updateLocalStorage();
        }
    }

    protected async _delete(path: Path | string | string[]): Promise<boolean> {
        return this.handleResponse<boolean>(() => Axios.delete(this.getService(path)));
    }

    protected async _set(path: Path | string | string[], value: any): Promise<boolean> {
        return this.handleResponse<boolean>(() => Axios.put<DatabaseResponse<boolean>>(this.getService(path), value));
    }

    protected async _get<T>(path: Path | string | string[]): Promise<T> {
        return this.handleResponse<T>(() => Axios.get<DatabaseResponse<T>>(this.getService(path)));
    }

    protected async _sync(): Promise<any> {
        return this.handleResponse<any>(() => Axios.post<DatabaseResponse<any>>(this.getService('/'), this.changes));
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