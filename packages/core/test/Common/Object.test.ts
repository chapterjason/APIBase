/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {expect} from 'chai';
import 'mocha';
import {isObject} from '../../src';

describe('Object', () => {

    it('isObject', () => {
        // String
        expect(isObject('Foo')).to.equal(false);

        // Numbers
        expect(isObject(100)).to.equal(false);
        expect(isObject(100.123)).to.equal(false);
        expect(isObject(0)).to.equal(false);

        // Infinity
        expect(isObject(Infinity)).to.equal(false);
        expect(isObject(-Infinity)).to.equal(false);

        // Null
        expect(isObject(null)).to.equal(false);

        // Undefined
        expect(isObject(undefined)).to.equal(false);

        // Arrays
        expect(isObject(['Foo', 'Bar'])).to.equal(false);
        expect(isObject([])).to.equal(false);

        // Object Instances
        expect(isObject(new Map())).to.equal(true);

        // Plain Objects
        expect(isObject({ Foo: 'bar' })).to.equal(true);
    });

});