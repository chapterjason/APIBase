import {EventInterface} from "./EventInterface";

export declare class Event implements EventInterface {
    protected type: string;

    constructor(type: string);

    getType(): string;
}
