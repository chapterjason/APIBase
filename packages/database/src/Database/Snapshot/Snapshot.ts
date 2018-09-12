/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {SnapshotInterface} from "./SnapshotInterface";
import {ReferenceInterface} from "../..";

export class Snapshot<SnapshotType = any> implements SnapshotInterface<SnapshotType> {

    protected data: SnapshotType;

    protected reference: ReferenceInterface<SnapshotType>;

    public constructor(reference: ReferenceInterface<SnapshotType>, data: SnapshotType) {
        this.reference = reference;
        this.data = data;
    }

    public value(): SnapshotType {
        return this.data;
    }

    public key(): string {
        return this.reference.key();
    }

}