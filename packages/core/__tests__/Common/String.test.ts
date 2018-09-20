/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {padLeft, padRight} from '../../src/Common/String';

describe('String', () => {

    it('padLeft', () => {
        expect(padLeft('00Bar')).toBe('00Bar');
        expect(padLeft('00Bar', 4)).toBe('00Bar');
        expect(padLeft('Bar', 5, 'B')).toBe('BBBar');
    });

    it('padRight', () => {
        expect(padRight('F0000')).toBe('F0000');
        expect(padRight('F0000', 4)).toBe('F0000');
        expect(padRight('Foo', 5, 'o')).toBe('Foooo');
    })


});