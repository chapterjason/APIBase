import {Database} from "../Database";
import {Reference} from "../..";
export declare class Snapshot<SnapshotType = any> {
    protected database: Database;
    protected reference: Reference<SnapshotType>;
    constructor(reference: Reference<SnapshotType>, data: SnapshotType);
    value(): SnapshotType;
    key(): string;
}
