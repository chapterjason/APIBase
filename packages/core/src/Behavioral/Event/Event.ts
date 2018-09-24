import {EventInterface} from "./EventInterface";

export class Event implements EventInterface {

    protected type: string;

    public constructor(type: string) {
        this.type = type;
    }

    public getType(): string {
        return this.type;
    }

}