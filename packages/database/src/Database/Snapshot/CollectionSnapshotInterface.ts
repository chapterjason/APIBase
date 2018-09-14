import {SnapshotInterface} from "./SnapshotInterface";
import {CollectionIndex} from "../..";
import { MapTupel } from "@apibase/core";

export interface CollectionSnapshotInterface<SnapshotType = any> extends SnapshotInterface<CollectionIndex<SnapshotType>> {

    item(segment: string): SnapshotInterface<SnapshotType>;

    forEach(callback: (snapshot: SnapshotInterface<SnapshotType>) => void): this;

    length(): number;

    reverse(): this;

    sortByKey(): this;

    sortByProperty(property: string): this;

    sort(compare: (a: MapTupel<string, SnapshotType>, b: MapTupel<string, SnapshotType>) => number): this;

}