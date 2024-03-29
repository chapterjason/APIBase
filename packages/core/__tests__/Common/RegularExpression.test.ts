/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {escape, match, matchAll} from '../../src';

describe('RegularExpression', () => {

    it('escape', () => {
        expect(escape('-/\\^$*+?.()|[]{}')).toBe('\\-\\/\\\\\\^\\$\\*\\+\\?\\.\\(\\)\\|\\[\\]\\{\\}');
    });

    it('match', () => {
        expect(match('This is Foo!', /Foo/)).toBe(true);
        expect(match('This is Foo!', /Bar/)).toBe(false);
    });

    it('matchAll', () => {
        expect(matchAll('This Foo was a Foo!', /Foo/g)).toMatchObject([{
            "groups": [],
            "index": 5,
            "input": "Foo"
        }, {
            "groups": [],
            "index": 15,
            "input": "Foo"
        }]);

        expect(matchAll.bind(matchAll, 'This Foo was a Foo!', /Foo/)).toThrowError('Missing global flag!');

        expect(matchAll('This Foo was a Foo!', /(\w+)/g)).toMatchObject([{
            "groups": [
                "This"
            ],
            "index": 0,
            "input": "This"
        }, {
            "groups": [
                "Foo"
            ],
            "index": 5,
            "input": "Foo"
        }, {
            "groups": [
                "was"
            ],
            "index": 9,
            "input": "was"
        }, {
            "groups": [
                "a"
            ],
            "index": 13,
            "input": "a"
        }, {
            "groups": [
                "Foo"
            ],
            "index": 15,
            "input": "Foo"
        }]);

    });

});