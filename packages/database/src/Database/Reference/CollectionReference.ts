/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Reference} from "./Reference";
import {generateIdentifier} from "@apibase/core";
import {CollectionSnapshot} from "../..";

export interface CollectionIndex<ItemType = any> {
    [id: string]: ItemType;
}

export class CollectionReference<ReferenceType = any> extends Reference<CollectionIndex<ReferenceType>> {

    public push(value?: ReferenceType) {
        const id = generateIdentifier();
        const reference = new Reference<ReferenceType>(this.database, this.path.child(id));

        if (typeof value !== "undefined") {
            reference.set(value);
        }

        return reference;
    }

    public get(): CollectionSnapshot<ReferenceType> {
        return new CollectionSnapshot<ReferenceType>(this, this.database.get<CollectionIndex<ReferenceType>>(this.path));
    }
}