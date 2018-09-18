import {SnapshotInterface} from "./SnapshotInterface";
import {CollectionIndex} from "../..";
import {MapTupel} from "@apibase/core";

export interface CollectionSnapshotInterface<SnapshotType = any> extends SnapshotInterface<CollectionIndex<SnapshotType>> {

    item(segment: string): SnapshotInterface<SnapshotType>;

    forEach(callback: (snapshot: SnapshotInterface<SnapshotType>) => void): this;

    map<Type = any>(callback: (snapshot: SnapshotInterface<SnapshotType>) => Type): Type[];

    // @todo interface, implementation, test
    // how to slice, if they are not indexed by number?
    // will it make sense?
    // :/
    // slice(): CollectionSnapshotInterface<SnapshotType>;

    length(): number;

    reverse(): this;

    sortByKey(): this;

    sortByProperty(property: string): this;

    sort(compare: (a: MapTupel<string, SnapshotType>, b: MapTupel<string, SnapshotType>) => number): this;

}