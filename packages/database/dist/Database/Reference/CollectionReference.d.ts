/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Reference} from "./Reference";
import {CollectionSnapshot} from "../..";

export interface CollectionIndex<ItemType = any> {
    [id: string]: ItemType;
}

export declare class CollectionReference<ReferenceType = any> extends Reference<CollectionIndex<ReferenceType>> {
    push(value?: ReferenceType): Reference<ReferenceType>;

    get(): CollectionSnapshot<ReferenceType>;
}
