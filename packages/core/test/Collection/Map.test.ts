/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import { expect } from 'chai';
import 'mocha';
import { Map } from '../../src/Collection/Map';

describe('Map', () => {

    it('constructor with array', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);

        expect(JSON.stringify(map['_keys'])).to.equal(JSON.stringify(['first', 'second']));
        expect(JSON.stringify(map['_values'])).to.equal(JSON.stringify(['testA', 'testB']));
    });

    it('constructor with iterator', () => {
        const map = new Map<string, string>((new Map<string, string>([['first', 'testA'], ['second', 'testB']])).entries());

        expect(JSON.stringify(map['_keys'])).to.equal(JSON.stringify(['first', 'second']));
        expect(JSON.stringify(map['_values'])).to.equal(JSON.stringify(['testA', 'testB']));
    });

    it('clear', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);

        map.clear();

        expect(JSON.stringify(map['_keys'])).to.equal(JSON.stringify([]));
        expect(JSON.stringify(map['_values'])).to.equal(JSON.stringify([]));
    });

    it('delete', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);

        map.delete('first');

        expect(JSON.stringify(map['_keys'])).to.equal(JSON.stringify(['second']));
        expect(JSON.stringify(map['_values'])).to.equal(JSON.stringify(['testB']));
    });

    it('forEach', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);

        const keys: string[] = [];
        const values: string[] = [];

        map.forEach((value: string, key: string) => {
            keys.push(key);
            values.push(value);
        });

        expect(JSON.stringify(keys)).to.equal(JSON.stringify(['first', 'second']));
        expect(JSON.stringify(values)).to.equal(JSON.stringify(['testA', 'testB']));
    });


    it('get', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);


        expect(map.get('first')).to.equal('testA');
        expect(map.get('second')).to.equal('testB');
        expect(map.get('third')).to.equal(null);
    });

    it('has', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);

        expect(map.has('first')).to.equal(true);
        expect(map.has('second')).to.equal(true);
        expect(map.has('drei')).to.equal(false);
    });

    it('keys', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);

        const keys = [];

        for (let key of map.keys()) {
            keys.push(key);
        }

        expect(JSON.stringify(keys)).to.equal(JSON.stringify(['first', 'second']));
    });

    it('set', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);

        map.set('third', 'testC');

        expect(JSON.stringify(map['_keys'])).to.equal(JSON.stringify(['first', 'second', 'third']));
        expect(JSON.stringify(map['_values'])).to.equal(JSON.stringify(['testA', 'testB', 'testC']));
    });

    it('set', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);

        expect(map.size()).to.equal(2);

        map.set('third', 'testC');

        expect(map.size()).to.equal(3);
    });

    it('values', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);

        const values = [];

        for (let value of map.values()) {
            values.push(value);
        }

        expect(JSON.stringify(values)).to.equal(JSON.stringify(['testA', 'testB']));
    });

    it('iterator', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB']]);

        const items = [];

        for (let value of map) {
            items.push(value);
        }

        expect(JSON.stringify(items)).to.equal(JSON.stringify([['first', 'testA'], ['second', 'testB']]));
    });

    it('reverse', () => {
        const map = new Map<string, string>([['first', 'testA'], ['second', 'testB'], ['third', 'testC']]);

        map.reverse();

        expect(JSON.stringify(map['_keys'])).to.equal(JSON.stringify(['third', 'second', 'first']));
        expect(JSON.stringify(map['_values'])).to.equal(JSON.stringify(['testC', 'testB', 'testA']));
    });

    it('sort by key', () => {
        const map = new Map<string, string>([['second', 'testB'], ['first', 'testA'], ['third', 'testC']]);

        const sortedMap = map.sort((a, b) => {
            return b[0].localeCompare(a[0]);
        });

        expect(JSON.stringify(sortedMap['_keys'])).to.equal(JSON.stringify(['third', 'second', 'first']));
        expect(JSON.stringify(sortedMap['_values'])).to.equal(JSON.stringify(['testC', 'testB', 'testA']));
    });

    it('sort by value', () => {
        const map = new Map<string, string>([['second', 'testB'], ['first', 'testA'], ['third', 'testC']]);

        const sortedMap = map.sort((a, b) => {
            return b[1].localeCompare(a[1]);
        });

        expect(JSON.stringify(sortedMap['_keys'])).to.equal(JSON.stringify(['third', 'second', 'first']));
        expect(JSON.stringify(sortedMap['_values'])).to.equal(JSON.stringify(['testC', 'testB', 'testA']));
    });

});