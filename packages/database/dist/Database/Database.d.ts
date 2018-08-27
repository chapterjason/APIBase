/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Reference} from "./Reference";
export interface DatabaseIndex {
    [key: string]: any;
}
export declare class Database {
    protected mapping: DatabaseIndex;
    protected depthLimit: number;

    constructor(mapping?: DatabaseIndex);

    delete(path: string): boolean;

    push(path: string, value: any): string;

    set(path: string, value: any): this;

    get<T>(path: string): T;

    ref<ReferenceType = any>(path?: string): Reference<ReferenceType>;

    protected setRoot(value: any): void;
}
