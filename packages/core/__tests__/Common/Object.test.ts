/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {isObject, Map, Path, walkDeep} from '../../src';

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

    it('walkDeep', () => {
        const data = {
            User: {
                Foo: {
                    name: 'Foo',
                    age: 20,
                    specs: {
                        CPU: 'anyone',
                        RAM: 100
                    }
                },
                Bar: {
                    name: 'Bar',
                    age: 40,
                    specs: {
                        CPU: 'none',
                        RAM: 200
                    }
                }
            }
        };

        const expected = [
            ["/User", {
                "Foo": {"name": "Foo", "age": 20, "specs": {"CPU": "anyone", "RAM": 100}},
                "Bar": {"name": "Bar", "age": 40, "specs": {"CPU": "none", "RAM": 200}}
            }],
            ["/User/Foo", {"name": "Foo", "age": 20, "specs": {"CPU": "anyone", "RAM": 100}}],
            ["/User/Foo/name", "Foo"],
            ["/User/Foo/age", 20],
            ["/User/Foo/specs", {"CPU": "anyone", "RAM": 100}],
            ["/User/Foo/specs/CPU", "anyone"],
            ["/User/Foo/specs/RAM", 100],
            ["/User/Bar", {"name": "Bar", "age": 40, "specs": {"CPU": "none", "RAM": 200}}],
            ["/User/Bar/name", "Bar"],
            ["/User/Bar/age", 40],
            ["/User/Bar/specs", {"CPU": "none", "RAM": 200}],
            ["/User/Bar/specs/CPU", "none"],
            ["/User/Bar/specs/RAM", 200]
        ];

        let counter = 0;
        walkDeep(data, (path: Path, value: any) => {
            expect(path.toString()).toBe(expected[counter][0]);
            const val = expected[counter][1];
            if (isObject(val) || Array.isArray(val)) {
                expect(value).toMatchObject(val);
            } else {
                expect(value).toBe(val);
            }

            counter++;
        });
    });

});