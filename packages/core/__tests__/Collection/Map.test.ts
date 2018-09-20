/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Map} from '../../src/Collection/Map';

describe('Map', () => {

    it('empty constructor', () => {
        const map = new Map<string, string>();

        expect(JSON.stringify(map['_keys'])).toBe(JSON.stringify([]));
        expect(JSON.stringify(map['_values'])).toBe(JSON.stringify([]));
    });

    it('constructor with array', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);

        expect(JSON.stringify(map['_keys'])).toBe(JSON.stringify(['first', 'second']));
        expect(JSON.stringify(map['_values'])).toBe(JSON.stringify(['testA', 'testB']));
    });

    it('constructor with iterator', () => {
        const map = new Map<string, string>((new Map<string, string>([['first', 'testA'], ['second', 'testB']])).entries());

        expect(JSON.stringify(map['_keys'])).toBe(JSON.stringify(['first', 'second']));
        expect(JSON.stringify(map['_values'])).toBe(JSON.stringify(['testA', 'testB']));
    });

    it('clear', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);

        map.clear();

        expect(JSON.stringify(map['_keys'])).toBe(JSON.stringify([]));
        expect(JSON.stringify(map['_values'])).toBe(JSON.stringify([]));
    });

    it('delete', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);

        expect(map.delete('first')).toBeTruthy();
        expect(map.delete('notExist')).toBeFalsy();

        expect(JSON.stringify(map['_keys'])).toBe(JSON.stringify(['second']));
        expect(JSON.stringify(map['_values'])).toBe(JSON.stringify(['testB']));
    });

    it('forEach', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);

        const keys: string[] = [];
        const values: string[] = [];

        map.forEach((value: string, key: string) => {
            keys.push(key);
            values.push(value);
        });

        expect(JSON.stringify(keys)).toBe(JSON.stringify(['first', 'second']));
        expect(JSON.stringify(values)).toBe(JSON.stringify(['testA', 'testB']));
    });


    it('get', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);


        expect(map.get('first')).toBe('testA');
        expect(map.get('second')).toBe('testB');
        expect(map.get('third')).toBe(null);
    });

    it('has', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);

        expect(map.has('first')).toBe(true);
        expect(map.has('second')).toBe(true);
        expect(map.has('drei')).toBe(false);
    });

    it('keys', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);

        const keys = [];

        for (let key of map.keys()) {
            keys.push(key);
        }

        expect(JSON.stringify(keys)).toBe(JSON.stringify(['first', 'second']));
    });

    it('set', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);

        map.set('third', 'testC');

        expect(JSON.stringify(map['_keys'])).toBe(JSON.stringify(['first', 'second', 'third']));
        expect(JSON.stringify(map['_values'])).toBe(JSON.stringify(['testA', 'testB', 'testC']));
    });

    it('set', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);

        expect(map.size()).toBe(2);

        map.set('third', 'testC');

        expect(map.size()).toBe(3);
    });

    it('values', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);

        const values = [];

        for (let value of map.values()) {
            values.push(value);
        }

        expect(JSON.stringify(values)).toBe(JSON.stringify(['testA', 'testB']));
    });

    it('iterator', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);

        const items = [];

        for (let value of map) {
            items.push(value);
        }

        expect(JSON.stringify(items)).toBe(JSON.stringify([['first', 'testA'], ['second', 'testB']]));
    });

    it('reverse', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB'], ['third', 'testC']]);

        map.reverse();

        expect(JSON.stringify(map['_keys'])).toBe(JSON.stringify(['third', 'second', 'first']));
        expect(JSON.stringify(map['_values'])).toBe(JSON.stringify(['testC', 'testB', 'testA']));
    });

    it('sort by key', () => {
        const map = new Map<string, string>([['second', 'testB'], ['first', 'testA'], ['third', 'testC']]);

        const sortedMap = map.sort((a, b) => {
            return b[0].localeCompare(a[0]);
        });

        expect(JSON.stringify(sortedMap['_keys'])).toBe(JSON.stringify(['third', 'second', 'first']));
        expect(JSON.stringify(sortedMap['_values'])).toBe(JSON.stringify(['testC', 'testB', 'testA']));
    });

    it('sort by value', () => {
        const map = new Map<string, string>([['second', 'testB'], ['first', 'testA'], ['third', 'testC']]);

        const sortedMap = map.sort((a, b) => {
            return b[1].localeCompare(a[1]);
        });

        expect(JSON.stringify(sortedMap['_keys'])).toBe(JSON.stringify(['third', 'second', 'first']));
        expect(JSON.stringify(sortedMap['_values'])).toBe(JSON.stringify(['testC', 'testB', 'testA']));
    });

});