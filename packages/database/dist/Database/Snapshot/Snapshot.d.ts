import {SnapshotInterface} from "./SnapshotInterface";
import {ReferenceInterface} from "../..";

export declare class Snapshot<SnapshotType = any> implements SnapshotInterface<SnapshotType> {
    protected data: SnapshotType;
    protected reference: ReferenceInterface<SnapshotType>;
    constructor(reference: ReferenceInterface<SnapshotType>, data: SnapshotType);
    value(): SnapshotType;
    key(): string;
}
