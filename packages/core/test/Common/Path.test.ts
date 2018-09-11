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
import {Path} from "../../src";

describe('Path', () => {

    it('constructor normalization and getSegments', () => {
        expect(new Path().getSegments()).to.deep.equal([]);
        expect(new Path(['Foo', 'Bar']).getSegments()).to.deep.equal(['Foo', 'Bar']);
        expect(new Path(['Foo', ' ', ' Bar']).getSegments()).to.deep.equal(['Foo', 'Bar']);
        expect(new Path('Foo/Bar').getSegments()).to.deep.equal(['Foo', 'Bar']);
        expect(new Path('/Foo/Bar').getSegments()).to.deep.equal(['Foo', 'Bar']);
        expect(new Path('/Foo/Bar/').getSegments()).to.deep.equal(['Foo', 'Bar']);
        expect(new Path('/Foo/////Bar/').getSegments()).to.deep.equal(['Foo', 'Bar']);
    });

    it('toString', () => {
        expect(new Path().toString()).to.equal('/');
        expect(new Path(['Foo', 'Bar']).toString()).to.equal('/Foo/Bar');
        expect(new Path(['Foo', ' ', ' Bar']).toString()).to.equal('/Foo/Bar');
        expect(new Path('Foo/Bar').toString()).to.equal('/Foo/Bar');
        expect(new Path('/Foo/Bar').toString()).to.equal('/Foo/Bar');
        expect(new Path('/Foo/Bar/').toString()).to.equal('/Foo/Bar');
        expect(new Path('/Foo/////Bar/').toString()).to.equal('/Foo/Bar');
    });

    it('parent', () => {
        expect(new Path('/Foo/Bar/Mars').parent().parent().toString()).to.equal('/Foo');
        expect(new Path('/Foo').parent().toString()).to.equal('/');
        expect(new Path('/').parent()).to.equal(null);
    });

    it('child', () => {
        expect(new Path('/').child('Foo').child('Bar').toString()).to.equal('/Foo/Bar');
        expect(new Path('/Foo').child('Bar').toString()).to.equal('/Foo/Bar');
    });

    it('length', () => {
        expect(new Path('/Foo/Bar/Mars').length()).to.equal(3);
        expect(new Path('/').length()).to.equal(0);
    });

    it('end', () => {
        expect(new Path('/Foo/Bar/Mars').end()).to.equal('Mars');
        expect(new Path('/Foo').end()).to.equal('Foo');
        expect(new Path('/').end()).to.equal(null);
    });

});