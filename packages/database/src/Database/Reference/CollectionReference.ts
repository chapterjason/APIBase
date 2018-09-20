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
import {CollectionIndex, CollectionReferenceInterface} from "./CollectionReferenceInterface";

export class CollectionReference<ReferenceType = any> extends Reference<CollectionIndex<ReferenceType>> implements CollectionReferenceInterface<ReferenceType> {

    public async push(value?: ReferenceType): Promise<Reference<ReferenceType>> {
        const id = generateIdentifier();
        const reference = new Reference<ReferenceType>(this.database, this.path.child(id));

        if (typeof value !== "undefined") {
            await reference.set(value);
        }

        return reference;
    }

    public async get(): Promise<CollectionSnapshot<ReferenceType>> {
        const value = await this.database.get<CollectionIndex<ReferenceType>>(this.path);
        return new CollectionSnapshot<ReferenceType>(this, value);
    }
}