/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

export interface DataStorageIndex {
    [key: string]: any;
}

export class DataStorage {

    protected data: DataStorageIndex;

    public constructor(data: DataStorageIndex = {}) {
        this.data = data;
    }

    public has(key: string): boolean {
        return key in this.data;
    }

    public set(key: string, value: any): DataStorage {
        this.data[key] = value;

        return this;
    }

    public get(key: string): any {
        if (this.has(key)) {
            return this.data[key];
        }

        return null;
    }

}