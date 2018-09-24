import {DatabaseEvent} from "./DatabaseEvent";
import {CreateChange} from "../..";

export declare class CreateEvent extends DatabaseEvent {
    protected change: CreateChange;

    constructor(change: CreateChange);
}
