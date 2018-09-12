/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Path} from '@apibase/core';
import {Reference} from "./Reference/Reference";
import {CollectionReference} from "./Reference/CollectionReference";

export interface DatabaseIndex {
    [key: string]: any;
}

export class Database {

    protected mapping: DatabaseIndex;

    protected depthLimit: number = 32;

    public constructor(mapping: DatabaseIndex = {}) {
        this.mapping = mapping;
    }

    public getPath(): Path;
    public getPath(segments: string[]): Path;
    public getPath(path: string): Path;
    public getPath(path: Path): Path;
    public getPath(path: any = []): Path {
        if (typeof path === "string") {
            path = new Path(path);
        } else if (Array.isArray(path)) {
            path = new Path(path);
        }

        return path;
    }

    public delete(): boolean;
    public delete(segments: string[]): boolean;
    public delete(path: string): boolean;
    public delete(path: Path): boolean;
    public delete(path: any = []): boolean {
        path = this.getPath(path);

        if (path.length() === 0) {
            this.mapping = {};
            return true;
        } else {
            const segments: string[] = path.getSegments();

            let current: DatabaseIndex = this.mapping;

            const lastIndex = segments.length - 1;
            const currentPath: Path = new Path();

            let itemIndex = 0;
            for (; itemIndex < segments.length; itemIndex++) {
                const segment = segments[itemIndex];

                if (segment in current) {
                    currentPath.child(segment);

                    if (itemIndex === lastIndex) {
                        delete current[segment];
                        return true;
                    }

                    current = current[segment];
                } else {
                    return false;
                }
            }
        }
    }

    public set(segments: string[], value: any): this;
    public set(path: string, value: any): this;
    public set(path: Path, value: any): this;
    public set(path: any, value: any): this {
        path = this.getPath(path);

        if (path.length() === 0) {
            this.mapping = value;
        } else {
            const segments: string[] = path.getSegments();

            let current: DatabaseIndex = this.mapping;
            let limitCounter = 1;

            for (let segmentIndex = 0; segmentIndex < segments.length; segmentIndex++) {
                const segment = segments[segmentIndex];
                limitCounter++;

                if (limitCounter >= this.depthLimit) {
                    throw new Error('Depth limit of ' + this.depthLimit + ' exceeded!');
                }

                if (!current[segment]) {
                    current[segment] = {};
                }

                if (segmentIndex <= segments.length - 2) {
                    current = current[segment];
                } else {
                    current[segment] = value;
                }
            }
        }

        return this;
    }

    public get<T>(): T;
    public get<T>(segments: string[]): T;
    public get<T>(path: string): T;
    public get<T>(path: Path): T;
    public get<T>(path: any = []): T {
        path = this.getPath(path);

        if (path.length() === 0) {
            return this.mapping as T;
        } else {
            const segments: string[] = path.getSegments();
            let current: DatabaseIndex = this.mapping;
            const currentPath: Path = new Path();

            for (let segment of segments) {
                if (segment in current) {
                    currentPath.child(segment);
                    current = current[segment];
                } else {
                    throw new Error('Path "' + segment + '" not found under "' + currentPath.toString() + '"!');
                }
            }

            return current as T;
        }
    }

    public reference<ReferenceType = any>(): Reference<ReferenceType>;
    public reference<ReferenceType = any>(segments: string[]): Reference<ReferenceType>;
    public reference<ReferenceType = any>(path: string): Reference<ReferenceType>;
    public reference<ReferenceType = any>(path: Path): Reference<ReferenceType>;
    public reference<ReferenceType = any>(path: any = []): Reference<ReferenceType> {
        return new Reference<ReferenceType>(this, this.getPath(path));
    }

    public collection<ReferenceType = any>(): CollectionReference<ReferenceType>;
    public collection<ReferenceType = any>(segments: string[]): CollectionReference<ReferenceType>;
    public collection<ReferenceType = any>(path: string): CollectionReference<ReferenceType>;
    public collection<ReferenceType = any>(path: Path): CollectionReference<ReferenceType>;
    public collection<ReferenceType = any>(path: any = []): CollectionReference<ReferenceType> {
        return new CollectionReference<ReferenceType>(this, this.getPath(path));
    }

}