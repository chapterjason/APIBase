/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {CollectionReference, Snapshot} from "../..";
import {Path} from "@apibase/core";
import {ReferenceInterface, ReferenceJSON} from "./ReferenceInterface";
import { Database } from "../Database";

export class Reference<ReferenceType = any> implements ReferenceInterface<ReferenceType> {

    protected database: Database;

    protected path: Path;

    public constructor(database: Database, path: Path) {
        this.database = database;
        this.path = path;
    }

    public getPath(): Path {
        return this.path;
    }

    public key(): string {
        return this.path.end();
    }

    public toJSON(): ReferenceJSON {
        return {
            path: this.path.toString(),
            value: this.get().value()
        };
    }

    public parent<ParentReferenceType = any>(): Reference<ParentReferenceType> | null {
        if (this.path.length() === 0) { // parent of root is null
            return null;
        } else if (this.path.length() === 1) { // parent
            return new Reference<ParentReferenceType>(this.database, new Path());
        } else {
            return new Reference<ParentReferenceType>(this.database, this.path.parent());
        }
    }

    public reference<ReferenceType = any>(segment: string): Reference<ReferenceType> {
        return new Reference<ReferenceType>(this.database, this.path.child(segment));
    }

    public collection<ReferenceType = any>(segment: string): CollectionReference<ReferenceType> {
        return new CollectionReference<ReferenceType>(this.database, this.path.child(segment));
    }

    public set(value: ReferenceType): boolean {
        return this.database.set(this.path, value);
    }

    public get(): Snapshot<ReferenceType> {
        return new Snapshot<ReferenceType>(this, this.database.get<ReferenceType>(this.path));
    }

    public delete(): boolean {
        return this.database.delete(this.path);
    }

}