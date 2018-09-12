import { ReferenceInterface } from "../Reference/ReferenceInterface";


export interface SnapshotInterface<SnapshotType = any> {

    value(): SnapshotType;

    key(): string;

}