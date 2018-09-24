import {EventInterface} from "./EventInterface";

export type EventHandlerType = (event: EventInterface) => void;

export interface EventIndex {
    [type: string]: EventHandlerType[];
}

export class EventEmitter {

    protected events: EventIndex = {};

    public on(event: string, handler: EventHandlerType) {
        if (!this.events[event]) {
            this.events[event] = [];
        }

        const index = this.events[event].indexOf(handler);

        if (index <= -1) {
            this.events[event].push(handler);
        }
    }

    public emit(event: EventInterface) {
        const eventHandlers = this.events[event.getType()];
        if (eventHandlers && eventHandlers.length > 0) {
            for (let eventHandler of eventHandlers) {
                eventHandler(event);
            }
        }
    }

    public off(handler: EventHandlerType) {
        const types = Object.keys(this.events);

        for (let type of types) {
            const eventHandlers = this.events[type];

            const index = eventHandlers.indexOf(handler);
            if (index > -1) {
                this.events[type].splice(index, 1);
            }
        }
    }

    public once(event: string, handler: EventHandlerType) {
        const proxyHandler = (event: EventInterface) => {
            handler(event);
            this.off(proxyHandler);
        };

        this.on(event, proxyHandler);
    }

}