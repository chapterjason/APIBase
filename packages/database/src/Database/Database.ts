/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {generateIdentifier, isObject} from '@apibase/core';
import {normalize} from "../Common/Utils";
import {Reference} from "./Reference";

export interface DatabaseIndex {
    [key: string]: any;
}

export class Database {

    protected mapping: DatabaseIndex;

    protected depthLimit: number = 32;

    public constructor(mapping: DatabaseIndex = {}) {
        this.setRoot(mapping);
    }

    public delete(path: string): boolean {
        const items: string[] = normalize(path);

        let current: DatabaseIndex = this.mapping;

        if (items.length > 0) {
            const lastIndex = items.length - 1;
            let currentPath: string[] = [];

            for (let itemIndex in items) {
                const item = items[itemIndex];

                if (item in current) {
                    currentPath.push(item);

                    if (parseInt(itemIndex) === lastIndex) {
                        delete current[item];
                        return true;
                    }

                    current = current[item];
                } else {
                    throw new Error("Path \"" + item + "\" not found under \"/" + currentPath.join('/') + "\"!")
                }
            }
        } else {
            this.mapping = {};
            return true;
        }
    }

    public push(path: string, value: any) {
        let pathValue: any;

        try {
            pathValue = this.get(path);
        } catch (error) {
            this.set(path, {});
            pathValue = {};
        } finally {
            if (!isObject(pathValue)) {
                throw new Error('Path "' + path + '" is already occupied');
            }

            const id = generateIdentifier();
            this.set(path + '/' + id, value);

            return path + '/' + id;
        }
    }

    public set(path: string, value: any): this {
        const items: string[] = normalize(path);

        let current: DatabaseIndex = this.mapping;
        let counter = 0;
        const last: string = items.pop();

        if (last) {
            for (let item of items) {
                counter++;

                if (counter > this.depthLimit) {
                    throw new Error("Depth limit of \"" + this.depthLimit + "\" exceeded!");
                }

                if (!current[item]) {
                    current[item] = {};
                }

                current = current[item];
            }

            current[last] = value;
        } else {
            this.setRoot(value);
        }

        return this;
    }

    public get<T>(path: string): T {
        const items: string[] = normalize(path);

        let current: DatabaseIndex = this.mapping;

        if (items.length > 0) {
            let currentPath: string[] = [];

            for (let item of items) {
                if (item in current) {
                    currentPath.push(item);
                    current = current[item];
                } else {
                    throw new Error("Path \"" + item + "\" not found under \"/" + currentPath.join('/') + "\"!")
                }
            }
        }

        return current as T;
    }

    public ref<ReferenceType = any>(path: string = '/') {
        return new Reference<ReferenceType>(this, path);
    }

    protected setRoot(value: any) {
        if (isObject(value)) {
            this.mapping = value;
        } else {
            throw new Error("Path \"/\" can only set to object!");
        }
    }

}