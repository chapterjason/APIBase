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
import {Database} from "../src";

describe('Reference', () => {

    it('empty constructor', () => {
        const data = {
            theme: 'dark',
            brightness: 80,
            colors: {
                primary: '#333333',
                secondary: '#888888'
            }
        };

        const database = new Database(data);
        const ref = database.ref();

        expect(ref.get()).to.deep.equal(data);

    });

    it('constructor', () => {
        const database = new Database({
            theme: 'dark',
            brightness: 80,
            colors: {
                primary: '#333333',
                secondary: '#888888'
            }
        });
        const ref = database.ref('/colors/primary');

        expect(ref.get()).to.equal('#333333');
    });

    it('set', () => {
        const database = new Database({
            theme: 'dark',
            brightness: 80,
            colors: {
                primary: '#333333',
                secondary: '#888888'
            }
        });
        const ref = database.ref('/colors/primary');

        ref.set('#f5f5f5');

        expect(ref.get()).to.equal('#f5f5f5');
        expect(database.get('/colors/primary')).to.equal('#f5f5f5');
    });

    it('key', () => {
        const database = new Database({
            theme: 'dark',
            brightness: 80,
            colors: {
                primary: '#333333',
                secondary: '#888888'
            }
        });
        const ref = database.ref('/colors/primary');

        expect(ref.key()).to.equal('primary');
    });

    it('parent', () => {
        const database = new Database({
            theme: 'dark',
            brightness: 80,
            colors: {
                primary: '#333333',
                secondary: '#888888'
            }
        });
        const ref = database.ref('/colors/primary');

        expect(JSON.stringify(ref.parent())).to.equal(JSON.stringify(database.ref('/colors')));
    });

    it('child', () => {
        const database = new Database({
            theme: 'dark',
            brightness: 80,
            colors: {
                primary: '#333333',
                secondary: '#888888'
            }
        });
        const ref = database.ref('/colors');

        expect(JSON.stringify(ref.child('/primary'))).to.equal(JSON.stringify(database.ref('/colors/primary')));
    });

    it('set', () => {
        const database = new Database({
            theme: 'dark',
            brightness: 80,
            colors: {
                primary: '#333333',
                secondary: '#888888'
            }
        });

        const ref = database.ref('/colors');

        ref.set({red: '#ff0000'});

        expect(ref.get()).to.deep.equal({red: '#ff0000'});
    });

    it('push', () => {
        const database = new Database({
            theme: 'dark',
            brightness: 80,
            colors: {
                primary: '#333333',
                secondary: '#888888'
            }
        });

        const ref = database.ref('/colors');
        const child = ref.push();
        child.set('Foo');

        const expected = {
            primary: '#333333',
            secondary: '#888888'
        };

        expected[child.key()] = 'Foo';

        expect(ref.get()).to.deep.equal(expected);
    });

    it('delete', () => {
        const database = new Database({
            theme: 'dark',
            brightness: 80,
            colors: {
                primary: '#333333',
                secondary: '#888888'
            }
        });

        const ref = database.ref('/colors');

        ref.delete();

        expect(ref.get.bind(ref)).to.throw('Path "colors" not found under "/"!');

        expect(database.get('/')).to.deep.equal({
            theme: 'dark',
            brightness: 80
        });
    });

});