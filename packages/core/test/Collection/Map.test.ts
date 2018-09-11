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
import {Map} from '../../src/Collection/Map';

describe('Map', () => {

    it('some using, not a test...', () => {
        const map = new Map<string, string>([['eins', 'testA'], ['zwei', 'testB']]);
        const sortedMap = map.sort((a, b) => {
            return a[0].localeCompare(b[0]);
        });

        console.log(sortedMap);

    });

});