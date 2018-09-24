"use strict";
Object.defineProperty(exports, "__esModule", {value: true});

class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, handler) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        const index = this.events[event].indexOf(handler);
        if (index <= -1) {
            this.events[event].push(handler);
        }
    }

    emit(event) {
        const eventHandlers = this.events[event.getType()];
        if (eventHandlers && eventHandlers.length > 0) {
            for (let eventHandler of eventHandlers) {
                eventHandler(event);
            }
        }
    }

    off(handler) {
        const types = Object.keys(this.events);
        for (let type of types) {
            const eventHandlers = this.events[type];
            const index = eventHandlers.indexOf(handler);
            if (index > -1) {
                this.events[type].splice(index, 1);
            }
        }
    }

    once(event, handler) {
        const proxyHandler = (event) => {
            handler(event);
            this.off(proxyHandler);
        };
        this.on(event, proxyHandler);
    }
}

exports.EventEmitter = EventEmitter;
//# sourceMappingURL=EventEmitter.js.map