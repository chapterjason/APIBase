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
import {Database} from '../../src';
import {Path} from "@apibase/core";

describe('Database', () => {

    const database = new Database();

    const supportedTypes = [
        'Foo',
        123,
        123.45,
        Infinity,
        -Infinity,
        {'Foo': 'Bar'},
        {},
        new Date(),
        new Path('/foo/bar'),
        true,
        false,
        undefined,
        null,
        ['Foo'],
        []
    ];

    beforeEach(() => {
        database.set('/', {
            user: {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                    }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                    "name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net",
                    "bs": "harness real-time e-markets"
                }
            }
        });
    });

    it('constructor', () => {
        const database = new Database({'Foo': 'Bar'});
        expect(database.get('/')).to.deep.equal({'Foo': 'Bar'});
    });

    it('types', () => {
        for (let supportedType of supportedTypes) {
            database.set('/', supportedType);
            expect(database.get('/')).to.deep.equal(supportedType);
        }
    });

    it('getPath', () => {
        expect(database.getPath(['user', 'name']).toString()).to.equal('/user/name');
        expect(database.getPath('/user/name').toString()).to.equal('/user/name');
        expect(database.getPath(new Path('/user/name')).toString()).to.equal('/user/name');
        expect(database.getPath().toString()).to.equal('/');
    });

    it('delete', () => {
        expect(database.delete('/user/address/zipcode')).to.equal(true);

        expect(database.get('/')).to.deep.equal({
            user: {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                    }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                    "name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net",
                    "bs": "harness real-time e-markets"
                }
            }
        });

        expect(database.delete('/user/company/bs')).to.equal(true);

        expect(database.get('/')).to.deep.equal({
            user: {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                    }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                    "name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net"
                }
            }
        });

        expect(database.delete('/user/address/geo')).to.equal(true);

        expect(database.get('/')).to.deep.equal({
            user: {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough"
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                    "name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net"
                }
            }
        });

        expect(database.delete('/')).to.equal(true);

        expect(database.get('/')).to.deep.equal({});
    });

    it('delete root', () => {
        database.delete();
        expect(database.get('/')).to.deep.equal({});
    });

    it('delete not existing', () => {
        expect(database.delete('/something/that/does/not/exist')).to.equal(false);
    });

    it('get', () => {
        expect(database.get('/user/address/geo')).to.deep.equal({
            "lat": "-37.3159",
            "lng": "81.1496"
        });
        expect(database.get('/user/phone')).to.equal("1-770-736-8031 x56442");
    });

    it('set', () => {
        database.set('/user/address/geo', {'Bar': 'Foo'});

        expect(database.get('/user/address')).to.deep.equal({
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {'Bar': 'Foo'}
        });
    });

    it('set over limit', () => {
        let segments: string[] = [];
        for (let i = 1; i < 32; segments[i++] = 't-' + i + '') ;
        expect(segments.length).to.equal(32);
        expect(database.set.bind(database, segments, {'Bar': 'Foo'})).to.throw('Depth limit of 32 exceeded!');
    });

    it('get not existing', () => {
        expect(database.get.bind(database, '/users/does/not/exist')).to.throw('Path "users" not found under "/"!');
    });

    it('array reference', () => {
        const reference = database.reference(['some', 'way']);

        expect(reference['database']).to.equal(database);
        expect(reference['path']['segments']).to.deep.equal(['some', 'way']);
    });

    it('string reference', () => {
        const reference = database.reference('/some/way');

        expect(reference['database']).to.equal(database);
        expect(reference['path']['segments']).to.deep.equal(['some', 'way']);
    });

    it('path reference', () => {
        const reference = database.reference(new Path('/some/way'));

        expect(reference['database']).to.equal(database);
        expect(reference['path']['segments']).to.deep.equal(['some', 'way']);
    });

    it('root reference', () => {
        const reference = database.reference();

        expect(reference['database']).to.equal(database);
        expect(reference['path']['segments'].length).to.equal(0);
    });

    it('array collection reference', () => {
        const reference = database.collection(['some', 'way']);

        expect(reference['database']).to.equal(database);
        expect(reference['path']['segments']).to.deep.equal(['some', 'way']);
    });

    it('string collection reference', () => {
        const reference = database.collection('/some/way');

        expect(reference['database']).to.equal(database);
        expect(reference['path']['segments']).to.deep.equal(['some', 'way']);
    });

    it('path collection reference', () => {
        const reference = database.collection(new Path('/some/way'));

        expect(reference['database']).to.equal(database);
        expect(reference['path']['segments']).to.deep.equal(['some', 'way']);
    });

    it('root collection reference', () => {
        const reference = database.collection();

        expect(reference['database']).to.equal(database);
        expect(reference['path']['segments'].length).to.equal(0);
    });

});