/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {createdAt, generateIdentifier} from '../../src';

describe('Identifier', () => {

    it('createdAt', () => {
        const expectedDate = new Date();
        const id = generateIdentifier();

        const actualDate = createdAt(id);

        expect(Math.floor(actualDate.getTime() / 1000)).toBe(Math.floor(expectedDate.getTime() / 1000));
    });

});