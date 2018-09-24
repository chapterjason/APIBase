import {DatabaseEvent} from "./DatabaseEvent";
import {CreateChange} from "../..";

export class CreateEvent extends DatabaseEvent {

    protected change: CreateChange;

    constructor(change: CreateChange) {
        super('create', change);
    }

}