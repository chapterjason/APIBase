import {Event, EventEmitter} from "../../../src";

describe('EventEmitter', () => {

    it('on', () => {
        const eventEmitter = new EventEmitter();
        const handler = (event) => {
        };
        eventEmitter.on('foo', handler);
        expect(eventEmitter['events']['foo'].length).toBe(1);
        expect(eventEmitter['events']['foo'][0]).toBe(handler);
    });

    it('on double', () => {
        const eventEmitter = new EventEmitter();
        const handler = (event) => {
        };
        eventEmitter.on('foo', handler);
        eventEmitter.on('foo', handler);
        expect(eventEmitter['events']['foo'].length).toBe(1);
        expect(eventEmitter['events']['foo'][0]).toBe(handler);
    });

    it('off', () => {
        const eventEmitter = new EventEmitter();
        const handlerA = (event) => {
        };
        const handlerB = (event) => {
        };

        eventEmitter.on('foo', handlerA);
        eventEmitter.on('foo', handlerB);

        eventEmitter.off(handlerA);

        expect(eventEmitter['events']['foo'][0]).toBe(handlerB);
        expect(eventEmitter['events']['foo'].length).toBe(1);
    });

    it('off double', () => {
        const eventEmitter = new EventEmitter();
        const handlerA = (event) => {
        };
        const handlerB = (event) => {
        };

        eventEmitter.on('foo', handlerA);
        eventEmitter.on('foo', handlerB);

        eventEmitter.off(handlerA);
        eventEmitter.off(handlerA);

        expect(eventEmitter['events']['foo'][0]).toBe(handlerB);
        expect(eventEmitter['events']['foo'].length).toBe(1);
    });

    it('emit', () => {
        const eventEmitter = new EventEmitter();
        let emitted = false;

        eventEmitter.on('foo', (event) => {
            emitted = true;
        });

        eventEmitter.emit(new Event('foo'));

        expect(emitted).toBeTruthy();
    });

    it('once', () => {
        const eventEmitter = new EventEmitter();
        let emitted = 0;

        eventEmitter.once('foo', (event) => {
            emitted++;
        });

        eventEmitter.emit(new Event('foo'));
        eventEmitter.emit(new Event('foo'));

        expect(emitted).toBe(1);
    });

});

