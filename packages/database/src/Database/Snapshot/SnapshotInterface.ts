export interface SnapshotInterface<SnapshotType = any> {

    value(): SnapshotType;

    key(): string;

}