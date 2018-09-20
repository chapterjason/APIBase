/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {isObject, Map} from '../../src';

describe('Object', () => {

    it('isObject', () => {
        // String
        expect(isObject('Foo')).toBe(false);

        // Numbers
        expect(isObject(100)).toBe(false);
        expect(isObject(100.123)).toBe(false);
        expect(isObject(0)).toBe(false);

        // Infinity
        expect(isObject(Infinity)).toBe(false);
        expect(isObject(-Infinity)).toBe(false);

        // Null
        expect(isObject(null)).toBe(false);

        // Undefined
        expect(isObject(undefined)).toBe(false);

        // Arrays
        expect(isObject(['Foo', 'Bar'])).toBe(false);
        expect(isObject([])).toBe(false);

        // Object Instances
        expect(isObject(new Map())).toBe(true);

        // Plain Objects
        expect(isObject({Foo: 'bar'})).toBe(true);
    });

});