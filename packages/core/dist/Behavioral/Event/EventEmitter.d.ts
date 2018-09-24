import {EventInterface} from "./EventInterface";

export declare type EventHandlerType = (event: EventInterface) => void;

export interface EventIndex {
    [type: string]: EventHandlerType[];
}

export declare class EventEmitter {
    protected events: EventIndex;

    on(event: string, handler: EventHandlerType): void;

    emit(event: EventInterface): void;

    off(handler: EventHandlerType): void;

    once(event: string, handler: EventHandlerType): void;
}
