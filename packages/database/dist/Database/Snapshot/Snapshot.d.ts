/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Database} from "../Database";
import {Reference} from "../..";

export declare class Snapshot<SnapshotType = any> {
    protected database: Database;
    protected reference: Reference<SnapshotType>;

    constructor(reference: Reference<SnapshotType>, data: SnapshotType);

    value(): SnapshotType;

    key(): string;
}
