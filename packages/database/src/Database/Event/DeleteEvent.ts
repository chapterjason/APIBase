import {DatabaseEvent} from "./DatabaseEvent";
import {ChangeInterface} from "../..";

export class DeleteEvent extends DatabaseEvent {
    constructor(change: ChangeInterface) {
        super('delete', change);
    }
}