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

export declare class DataStorage {
    protected data: DataStorageIndex;

    constructor(data?: DataStorageIndex);

    has(key: string): boolean;

    set(key: string, value: any): DataStorage;

    get(key: string): any;
}
