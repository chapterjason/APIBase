/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import { expect } from 'chai';
import 'mocha';
import {Database} from '../src';
import {basename} from "../src";

describe('Database', () => {

    it('constructor', () => {
        const message = 'Path "/" can only set to object!';

        const database = new Database(undefined as any);
        expect(database.get('/')).to.deep.equal({});

        expect(() => {
            new Database('Foo' as any);
        }).to.throw(message);
        expect(() => {
            new Database(123 as any);
        }).to.throw(message);
        expect(() => {
            new Database(123.45 as any);
        }).to.throw(message);
        expect(() => {
            new Database(true as any);
        }).to.throw(message);
        expect(() => {
            new Database(null as any);
        }).to.throw(message);
        expect(() => {
            new Database(['Foo'] as any);
        }).to.throw(message);
        expect(() => {
            new Database([] as any);
        }).to.throw(message);
        expect(() => {
            new Database(Symbol() as any);
        }).to.throw(message);
    });

    it('root', () => {
        const database = new Database();
        database.set('/', { 'Foo': 'Bar' });
        expect(database.get('/')).to.deep.equal({ 'Foo': 'Bar' });
    });

    it('root non object', () => {
        const database = new Database();
        const message = 'Path "/" can only set to object!';

        expect(database.set.bind(database, '/', 'Foo')).to.throw(message);
        expect(database.set.bind(database, '/', 123)).to.throw(message);
        expect(database.set.bind(database, '/', 123.45)).to.throw(message);
        expect(database.set.bind(database, '/', true)).to.throw(message);
        expect(database.set.bind(database, '/', undefined)).to.throw(message);
        expect(database.set.bind(database, '/', null)).to.throw(message);
        expect(database.set.bind(database, '/', ['Foo'])).to.throw(message);
        expect(database.set.bind(database, '/', [])).to.throw(message);
        expect(database.set.bind(database, '/', Symbol())).to.throw(message);
    });

    it('delete', () => {
        const database = new Database({
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

    it('get', () => {
        const database = new Database({
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

        expect(database.get('/user/address/geo')).to.deep.equal({
            "lat": "-37.3159",
            "lng": "81.1496"
        });
        expect(database.get('/user/phone')).to.equal("1-770-736-8031 x56442");
    });

    it('set', () => {
        const database = new Database({
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

        database.set('/user/address/geo', {'Bar': 'Foo'});

        expect(database.get('/user/address')).to.deep.equal({
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {'Bar': 'Foo'}
        });
    });

    it('push', () => {
        const database = new Database();

        const id = database.push('/users', {'Foo': 'Bar'});

        const exptected = {'users': {}};
        exptected.users[basename(id)] = {'Foo': 'Bar'};

        expect(database.get('/')).to.deep.equal(exptected);
    });

});