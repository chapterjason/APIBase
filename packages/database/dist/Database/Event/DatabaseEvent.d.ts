import {Event} from "@apibase/core";
import {ChangeInterface} from "../..";

export declare class DatabaseEvent extends Event {
    protected change: ChangeInterface;

    constructor(type: string, change: ChangeInterface);

    getChange(): ChangeInterface;
}
