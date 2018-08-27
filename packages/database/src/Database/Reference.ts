/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */


import {Database} from "./Database";
import {basename, normalizeAsString, parentPath} from "../Common/Utils";

export class Reference<ReferenceType = any> {

    protected database: Database;

    protected path: string;

    public constructor(database: Database, path: string) {
        this.database = database;
        this.path = path;
    }

    public key() {
        return basename(this.path);
    }

    public toObject() {
        return {path: this.path, value: this.get()};
    }

    public parent<ParentReferenceType = any>() {
        return new Reference<ParentReferenceType>(this.database, parentPath(this.path));
    }

    public child<ChildReferenceType = any>(childPath: string): Reference<ChildReferenceType> {
        return new Reference<ChildReferenceType>(this.database, this.path + normalizeAsString(childPath));
    }

    public set(value: ReferenceType) {
        this.database.set(this.path, value);
    }

    public get(): ReferenceType {
        return this.database.get(this.path);
    }

    public push<ChildReferenceType = any>(value?: ReferenceType): Reference<ChildReferenceType> {
        const childPath = this.database.push(this.path, value || null);
        return new Reference<ChildReferenceType>(this.database, childPath);
    }

    public delete() {
        this.database.delete(this.path);
    }
}