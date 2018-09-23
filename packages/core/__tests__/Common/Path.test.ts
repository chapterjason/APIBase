/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Path} from "../../src";

describe('Path', () => {

    it('constructor normalization and getSegments', () => {
        expect(new Path().getSegments()).toMatchObject([]);
        expect(new Path(['Foo', 'Bar']).getSegments()).toMatchObject(['Foo', 'Bar']);
        expect(new Path(['Foo', ' ', ' Bar']).getSegments()).toMatchObject(['Foo', 'Bar']);
        expect(new Path(['Foo', ' ', ' Bar/Deep/Dive']).getSegments()).toMatchObject(['Foo', 'Bar', 'Deep', 'Dive']);
        expect(new Path('Foo/Bar').getSegments()).toMatchObject(['Foo', 'Bar']);
        expect(new Path('/Foo/Bar').getSegments()).toMatchObject(['Foo', 'Bar']);
        expect(new Path('/Foo/Bar/').getSegments()).toMatchObject(['Foo', 'Bar']);
        expect(new Path('/Foo/////Bar/').getSegments()).toMatchObject(['Foo', 'Bar']);
        expect(new Path(new Path('/Foo/////Bar/')).getSegments()).toMatchObject(['Foo', 'Bar']);
    });

    it('toString', () => {
        expect(new Path().toString()).toBe('/');
        expect(new Path(['Foo', 'Bar']).toString()).toBe('/Foo/Bar');
        expect(new Path(['Foo', ' ', ' Bar']).toString()).toBe('/Foo/Bar');
        expect(new Path('Foo/Bar').toString()).toBe('/Foo/Bar');
        expect(new Path('/Foo/Bar').toString()).toBe('/Foo/Bar');
        expect(new Path('/Foo/Bar/').toString()).toBe('/Foo/Bar');
        expect(new Path('/Foo/////Bar/').toString()).toBe('/Foo/Bar');
    });

    it('parent', () => {
        expect(new Path('/Foo/Bar/Mars').parent().parent().toString()).toBe('/Foo');
        expect(new Path('/Foo').parent().toString()).toBe('/');
        expect(new Path('/').parent()).toBe(null);
    });

    it('child', () => {
        expect(new Path('/').child('Foo').child('Bar').toString()).toBe('/Foo/Bar');
        expect(new Path('/Foo').child('Bar').toString()).toBe('/Foo/Bar');
    });

    it('length', () => {
        expect(new Path('/Foo/Bar/Mars').length()).toBe(3);
        expect(new Path('/').length()).toBe(0);
    });

    it('end', () => {
        expect(new Path('/Foo/Bar/Mars').end()).toBe('Mars');
        expect(new Path('/Foo').end()).toBe('Foo');
        expect(new Path('/').end()).toBe(null);
    });

    it('ensurePath', () => {
        expect(Path.ensurePath('/Foo/Bar').toString()).toBe('/Foo/Bar');
        expect(Path.ensurePath(['Foo', 'Bar']).toString()).toBe('/Foo/Bar');
        expect(Path.ensurePath(new Path('/Foo/Bar')).toString()).toBe('/Foo/Bar');
    });

});