import * as fs from 'fs';
import * as zlib from 'zlib';
import { generateIdentifier, isObject } from '@apibase/core';

export interface DatabaseIndex {
    [key: string]: any;
}

export class Database {

    protected mapping: DatabaseIndex;

    protected depthLimit: number = 32;

    public constructor(mapping: DatabaseIndex = {}) {
        this.setRoot(mapping);
    }

    public load(file: string) {
        if (!fs.existsSync(file)) {
            throw new Error('Database file "' + file + '" does not exist!');
        }

        this.mapping = JSON.parse(zlib.inflateSync(Buffer.from(fs.readFileSync(file).toString(), 'base64')).toString());
    }

    public save(file: string) {
        fs.writeFileSync(file, zlib.deflateSync(JSON.stringify(this.mapping), { memLevel: 9, level: 9 }).toString('base64'));
    }

    protected setRoot(value: any) {
        if (isObject(value)) {
            this.mapping = value;
        } else {
            throw new Error("Path \"/\" can only set to object!");
        }
    }

    protected static normalizePath(path: string) {
        return path
            .split('/')
            .map(part => part.trim())
            .filter(part => part.length);
    }

    public push(path: string, value: any) {
        let pathValue;

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

            return id;
        }
    }

    public set(path: string, value: any): this {
        const items: string[] = Database.normalizePath(path);

        let current: DatabaseIndex = this.mapping;
        let counter = 0;
        const last: string = items.pop();

        if (last) {
            for (let item of items) {
                counter++;

                if (counter > this.depthLimit) {
                    throw new Error("Depth limit of \"" + this.depthLimit + "\" exceeded!");
                }

                if(!current[item]){
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
        const items: string[] = Database.normalizePath(path);

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

}