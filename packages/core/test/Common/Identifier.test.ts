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
import { generateIdentifier, createdAt } from '../../src';

describe('Identifier', () => {

    it('createdAt', () => {
        const expectedDate = new Date();
        const id = generateIdentifier();

        const actualDate = createdAt(id);

        expect(Math.floor(actualDate.getTime() / 1000)).to.equal(Math.floor(expectedDate.getTime() / 1000));
    });

});