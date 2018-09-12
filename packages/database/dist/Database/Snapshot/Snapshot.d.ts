import { Database } from "../Database";
import { SnapshotInterface } from "./Snapshotinterface";
import { ReferenceInterface } from "../Reference/ReferenceInterface";
export declare class Snapshot<SnapshotType = any> implements SnapshotInterface<SnapshotType> {
    protected database: Database;
    protected reference: ReferenceInterface<SnapshotType>;
    constructor(reference: ReferenceInterface<SnapshotType>, data: SnapshotType);
    value(): SnapshotType;
    key(): string;
}
