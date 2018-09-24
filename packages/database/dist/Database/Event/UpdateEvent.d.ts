import {DatabaseEvent} from "./DatabaseEvent";
import {UpdateChange} from "../..";

export declare class UpdateEvent extends DatabaseEvent {
    protected change: UpdateChange;

    constructor(change: UpdateChange);
}
