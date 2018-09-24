import {DatabaseEvent} from "./DatabaseEvent";
import {ChangeInterface} from "../..";

export declare class DeleteEvent extends DatabaseEvent {
    constructor(change: ChangeInterface);
}
