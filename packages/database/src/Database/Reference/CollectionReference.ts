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
import {CollectionSnapshot, CollectionSnapshotInterface} from "../..";
import {CollectionIndex, CollectionReferenceInterface} from "./CollectionReferenceInterface";
import {ReferenceInterface} from "./ReferenceInterface";

export class CollectionReference<ReferenceType = any> extends Reference<CollectionIndex<ReferenceType>> implements CollectionReferenceInterface<ReferenceType> {

    public push(value?: ReferenceType): ReferenceInterface<ReferenceType> {
        const id = generateIdentifier();
        const reference = new Reference<ReferenceType>(this.database, this.path.child(id));

        if (typeof value !== "undefined") {
            reference.set(value);
        }

        return reference;
    }

    public get(): CollectionSnapshotInterface<ReferenceType> {
        return new CollectionSnapshot<ReferenceType>(this, this.database.get<CollectionIndex<ReferenceType>>(this.path));
    }
}