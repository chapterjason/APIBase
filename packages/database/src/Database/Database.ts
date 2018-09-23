/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {generateIdentifier, Map, MapTupel, Path, PathType} from '@apibase/core';
import {Reference} from "./Reference/Reference";
import {CollectionReference} from "./Reference/CollectionReference";
import {DatabaseIndex, DatabaseInterface} from './DatabaseInterface';
import {DeleteChange} from "./Change/DeleteChange";
import {SetChange} from "./Change/SetChange";
import {ChangeInterface} from "./Change/ChangeInterface";

export class Database implements DatabaseInterface {

    protected original: DatabaseIndex;

    protected mapping: DatabaseIndex;

    protected depthLimit: number = 32;

    protected changes: Map<string, ChangeInterface> = new Map<string, ChangeInterface>();

    public constructor(mapping: DatabaseIndex = {}) {
        this.original = mapping;
        this.mapping = mapping;
    }

    public async getMapping(): Promise<DatabaseIndex> {
        return Promise.resolve(this.mapping);
    }

    public async getChanges(): Promise<Map<string, ChangeInterface>> {
        return Promise.resolve(this.changes);
    }

    async applyChanges(changes: Map<string, ChangeInterface>) {
        changes.forEach((change, key) => {
            this.changes.set(key, change);
        });

        this.mapping = this.original;

        this.changes.sort((a: MapTupel<string, ChangeInterface>, b: MapTupel<string, ChangeInterface>) => {
            return a[1].getTimestamp().getTime() - b[1].getTimestamp().getTime();
        });

        for (let change of this.changes.values()) {
            if (change instanceof DeleteChange) {
                await this.applyDelete(change);
            } else if (change instanceof SetChange) {
                await this.applySet(change);
            }
        }
    }

    public async delete(path?: PathType): Promise<boolean> {
        const change = new DeleteChange(path);
        this.changes.set(generateIdentifier(), change);
        return this.applyDelete(change);
    }

    public async set(path: PathType, value: any): Promise<boolean> {
        const change = new SetChange(path, value);
        this.changes.set(generateIdentifier(), change);
        return this.applySet(change);
    }

    public async applySet(change: SetChange): Promise<boolean> {
        const path = Path.ensurePath(change.getPath());

        if (path.length() === 0) {
            this.mapping = change.getValue();
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
                    current[segment] = change.getValue();
                    return true;
                }
            }
        }

        // @todo cannot be covered by a test, also it makes not sense. Any ideas ?
        /* istanbul ignore next */
        return false;
    }

    public async get<T>(path?: PathType): Promise<T> {
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

    public reference<ReferenceType = any>(path?: PathType): Reference<ReferenceType> {
        return new Reference<ReferenceType>(this, Path.ensurePath(path));
    }

    public collection<ReferenceType = any>(path?: PathType): CollectionReference<ReferenceType> {
        return new CollectionReference<ReferenceType>(this, Path.ensurePath(path));
    }

    async applyDelete(change: DeleteChange): Promise<boolean> {
        const path = Path.ensurePath(change.getPath());

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

}