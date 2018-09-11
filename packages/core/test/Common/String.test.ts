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
import {  } from '../../src';
import { padLeft, padRight } from '../../src/Common/String';

describe('String', () => {

    it('padLeft', () => {
        expect(padLeft('Bar', 5, 'B')).to.equal('BBBar');
    });

    it('padRight', () => {
        expect(padRight('Foo', 5, 'o')).to.equal('Foooo');
    })


});