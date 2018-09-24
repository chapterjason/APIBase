import {DatabaseEvent} from "./DatabaseEvent";
import {UpdateChange} from "../..";

export class UpdateEvent extends DatabaseEvent {

    protected change: UpdateChange;

    constructor(change: UpdateChange) {
        super('update', change);
    }

}