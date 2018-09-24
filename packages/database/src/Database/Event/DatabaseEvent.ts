import {Event} from "@apibase/core";
import {ChangeInterface} from "../..";

export class DatabaseEvent extends Event {

    protected change: ChangeInterface;

    constructor(type: string, change: ChangeInterface) {
        super(type);
        this.change = change;
    }

    public getChange() {
        return this.change;
    }

}