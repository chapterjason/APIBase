/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Database} from "../Database";
import { SnapshotInterface } from "./Snapshotinterface";
import { ReferenceInterface } from "../Reference/ReferenceInterface";

export class Snapshot<SnapshotType = any> implements SnapshotInterface<SnapshotType> {

    protected database: Database;

    protected reference: ReferenceInterface<SnapshotType>;

    public constructor(reference: ReferenceInterface<SnapshotType>, data: SnapshotType) {
        this.reference = reference;
        this.database = new Database(data);
    }

    public value(): SnapshotType {
        return this.database.get<SnapshotType>();
    }

    public key(): string {
        return this.reference.key();
    }

}