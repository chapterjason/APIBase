/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Database} from "../Database";
import {CollectionReference, Snapshot} from "../..";
import {Path} from "@apibase/core";
import { ReferenceInterface } from "./ReferenceInterface";
import { SnapshotInterface } from "../Snapshot/Snapshotinterface";
import { CollectionReferenceInterface } from "./CollectionReferenceInterface";

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

    public toJSON() {
        return {
            path: this.path.toString(),
            value: (this.get() as any).value()
        };
    }

    public parent<ParentReferenceType = any>(): ReferenceInterface<ParentReferenceType> | null {
        if (this.path.length() === 0) { // parent of root is null
            return null;
        } else if (this.path.length() === 1) { // parent
            return new Reference<ParentReferenceType>(this.database, new Path());
        } else {
            return new Reference<ParentReferenceType>(this.database, this.path.parent());
        }
    }

    public reference<ReferenceType = any>(segment: string): ReferenceInterface<ReferenceType> {
        return new Reference<ReferenceType>(this.database, this.path.child(segment));
    }

    public collection<ReferenceType = any>(segment: string): CollectionReferenceInterface<ReferenceType> {
        return new CollectionReference<ReferenceType>(this.database, this.path.child(segment));
    }

    public set(value: ReferenceType): this {
        this.database.set(this.path, value);
        return this;
    }

    public get(): SnapshotInterface<ReferenceType> {
        return new Snapshot<ReferenceType>(this, this.database.get<ReferenceType>(this.path));
    }

    public delete(): this {
        this.database.delete(this.path);

        return this;
    }

}