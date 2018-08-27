/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Database} from "./Database";

export declare class Reference<ReferenceType = any> {
    protected database: Database;
    protected path: string;

    constructor(database: Database, path: string);

    key(): string;

    toObject(): {
        path: string;
        value: ReferenceType;
    };

    parent<ParentReferenceType = any>(): Reference<ParentReferenceType>;

    child<ChildReferenceType = any>(childPath: string): Reference<ChildReferenceType>;

    set(value: ReferenceType): void;

    get(): ReferenceType;

    push<ChildReferenceType = any>(value?: ReferenceType): Reference<ChildReferenceType>;

    delete(): void;
}
