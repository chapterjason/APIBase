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
import {DatabaseIndex, DatabaseInterface} from './DatabaseInterface';

export class Database implements DatabaseInterface {

    protected mapping: DatabaseIndex;

    protected depthLimit: number = 32;

    public constructor(mapping: DatabaseIndex = {}) {
        this.mapping = mapping;
    }

    public delete(path?: Path | string | string[]): boolean {
        path = Path.ensurePath(path);

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

    public set(path: Path | string | string[], value: any): boolean {
        path = Path.ensurePath(path);

        if (path.length() === 0) {
            this.mapping = value;
            return true;
        } else {
            const segments: string[] = path.getSegments();

            let current: DatabaseIndex = this.mapping;
            let depth = 1;

            for (let segmentIndex = 0; segmentIndex < segments.length; segmentIndex++) {
                const segment = segments[segmentIndex];
                depth++;

                if (depth >= this.depthLimit) {
                    throw new Error('Depth limit of ' + this.depthLimit + ' exceeded!');
                }
                // @todo while inserting object I have to measure the depth of the object in addition to the current depth

                if (!current[segment]) {
                    current[segment] = {};
                }

                if (segmentIndex <= segments.length - 2) {
                    current = current[segment];
                } else {
                    current[segment] = value;
                    return true;
                }
            }
        }

        // @todo cannot be covered by a test, also it makes not sense. Any ideas ?
        return false;
    }

    public get<T>(path?: Path | string | string[]): T {
        path = Path.ensurePath(path);

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

    public reference<ReferenceType = any>(path?: Path | string | string[]): Reference<ReferenceType> {
        return new Reference<ReferenceType>(this, Path.ensurePath(path));
    }

    public collection<ReferenceType = any>(path?: Path | string | string[]): CollectionReference<ReferenceType> {
        return new CollectionReference<ReferenceType>(this, Path.ensurePath(path));
    }

}