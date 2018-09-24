/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {
    AbstractChange,
    ChangeInterface,
    CreateChange,
    CreateEvent,
    Database,
    DeleteChange,
    DeleteEvent,
    UpdateChange,
    UpdateEvent
} from '../../src';
import {generateIdentifier, Map, Path} from "@apibase/core";

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

    beforeEach(async () => {
        return database.set('/', {
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

    it('constructor', async () => {
        const database = new Database({'Foo': 'Bar'});
        return database.get('/')
            .then(value => {
                expect(value).toMatchObject({'Foo': 'Bar'});
            });
    });

    it('getMapping', async () => {
        expect(await database.getMapping()).toMatchObject({
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

    it('getChanges', async () => {
        const database = new Database();

        await database.set('foo', 'val');
        await database.set('bar', 'ue');
        await database.delete('foo');

        const changes = await database.getChanges();
        const values = changes['_values'];

        expect(values[0]['path']['segments']).toMatchObject(['foo']);
        expect(values[0]['value']).toBe('val');

        expect(values[1]['path']['segments']).toMatchObject(['bar']);
        expect(values[1]['value']).toBe('ue');

        expect(values[2]['path']['segments']).toMatchObject(['foo']);
        expect(values[2]['value']).toBeUndefined();
    });

    it('applyChanges', async () => {
        const database = new Database();

        await database.set('foo', 'val');

        const changes = new Map<string, ChangeInterface>();

        class CustomChange extends AbstractChange {
        }

        const c1Change = new CustomChange('foo');
        const setChangeA = new CreateChange('bar', 'ue');
        const setChangeB = new CreateChange('bar', 'de');
        const c2Change = new CustomChange('bar');
        const deleteChange = new DeleteChange('foo');

        changes.set(generateIdentifier(), setChangeA);
        changes.set(generateIdentifier(), c1Change);
        changes.set(generateIdentifier(), setChangeB);
        changes.set(generateIdentifier(), deleteChange);
        changes.set(generateIdentifier(), c2Change);

        await database.applyChanges(changes);

        expect(await database.get()).toMatchObject({'bar': 'de'});

    });

    for (let index in supportedTypes) {
        const supportedType = supportedTypes[index];
        it('type ' + index, async () => {
            return database.set('/', supportedType).then(result => {
                expect(result).toBeTruthy();
                return database.get('/');
            }).then(result => {
                expect(result).toBe(supportedType);
                return true;
            });
        });
    }

    it('delete', async () => {
        return database.delete('/user/address/zipcode').then(result => {
            expect(result).toBeTruthy();
            return database.get('/');
        }).then(result => {
            expect(result).toMatchObject({
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

            return database.delete('/user/company/bs');
        }).then(result => {
            expect(result).toBeTruthy();
            return database.get('/');
        }).then(result => {
            expect(result).toMatchObject({
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

            return database.delete('/user/address/geo');
        }).then(result => {
            expect(result).toBeTruthy();
            return database.get('/');
        }).then(result => {
            expect(result).toMatchObject({
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

            return database.delete('/');
        }).then(result => {
            expect(result).toBeTruthy();
            return database.get('/');
        }).then(result => {
            expect(result).toMatchObject({});
        });
    });

    it('delete root', async () => {
        await database.delete();
        expect(await database.get('/')).toMatchObject({});
    });

    it('delete not existing', async () => {
        return database.delete('/something/that/does/not/exist').then(result => {
            expect(result).toBeFalsy();
        });
    });

    it('get', async () => {
        return database.get('/user/address/geo').then(result => {
            expect(result).toMatchObject({
                "lat": "-37.3159",
                "lng": "81.1496"
            });
            return database.get('/user/phone');
        }).then(result => {
            expect(result).toBe("1-770-736-8031 x56442");
        });
    });

    it('set', async () => {
        const result = await database.set('/user/address/geo', {'Bar': 'Foo'});

        expect(result).toBeTruthy();

        const address = await database.get('/user/address');

        expect(address).toMatchObject({
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {'Bar': 'Foo'}
        });
    });

    it('set over limit', async () => {
        let segments: string[] = [];
        for (let i = 1; i < 32; segments[i++] = 't-' + i + '') ;
        expect(segments.length).toBe(32);

        try {
            await database.set(segments, {'Bar': 'Foo'});
        } catch (error) {
            expect(error.toString()).toBe('Error: Depth limit of 32 exceeded!');
        }
    });

    it('get not existing', async () => {
        return database.get('/users/does/not/exist').catch(error => {
            expect(error.toString()).toBe('Error: Path "users" not found under "/"!');
        });
    });

    it('array reference', () => {
        const reference = database.reference(['some', 'way']);

        expect(reference['database']).toBe(database);
        expect(reference['path']['segments']).toMatchObject(['some', 'way']);
    });

    it('string reference', () => {
        const reference = database.reference('/some/way');

        expect(reference['database']).toBe(database);
        expect(reference['path']['segments']).toMatchObject(['some', 'way']);
    });

    it('path reference', () => {
        const reference = database.reference(new Path('/some/way'));

        expect(reference['database']).toBe(database);
        expect(reference['path']['segments']).toMatchObject(['some', 'way']);
    });

    it('root reference', () => {
        const reference = database.reference();

        expect(reference['database']).toBe(database);
        expect(reference['path']['segments'].length).toBe(0);
    });

    it('array collection reference', () => {
        const reference = database.collection(['some', 'way']);

        expect(reference['database']).toBe(database);
        expect(reference['path']['segments']).toMatchObject(['some', 'way']);
    });

    it('string collection reference', () => {
        const reference = database.collection('/some/way');

        expect(reference['database']).toBe(database);
        expect(reference['path']['segments']).toMatchObject(['some', 'way']);
    });

    it('path collection reference', () => {
        const reference = database.collection(new Path('/some/way'));

        expect(reference['database']).toBe(database);
        expect(reference['path']['segments']).toMatchObject(['some', 'way']);
    });

    it('root collection reference', () => {
        const reference = database.collection();

        expect(reference['database']).toBe(database);
        expect(reference['path']['segments'].length).toBe(0);
    });

    it('applyChanges with same timestamp', async () => {
        const database = new Database({
            'users': {
                'a': {'name': 'Foo'},
                'b': {'name': 'Bar'}
            }
        });

        const date = new Date();
        const updateChangeA = new CreateChange('/users/a/name', 'Change A');
        const updateChangeB = new CreateChange('/users/a/name', 'Change B');

        updateChangeA['timestamp'] = date;
        updateChangeB['timestamp'] = date;

        const changes = new Map<string, ChangeInterface>();
        changes.set(generateIdentifier(), updateChangeB);
        changes.set(generateIdentifier(), updateChangeA);

        expect(database['mapping']).toMatchObject({"users": {"a": {"name": "Foo"}, "b": {"name": "Bar"}}});
        await database.applyChanges(changes);
        // @todo Is this really expected...?
        expect(database['mapping']).toMatchObject({"users": {"a": {"name": "Change A"}, "b": {"name": "Bar"}}});
    });

    it('on create, update and delete', async () => {
        const database = new Database({
            'users': {
                'a': {'name': 'Foo'},
                'b': {'name': 'Bar'}
            }
        });

        const events = [];

        database.on("create", '/users/{id}', (event: CreateEvent) => {
            events.push(event);
        });

        database.on("update", '/users/{id}', (event: UpdateEvent) => {
            events.push(event);
            const change = event.getChange() as UpdateChange;
            expect(change.getPath().getSegments()).toMatchObject(['users', key]);
            expect(change.getBefore()).toMatchObject({'name': 'Example'});
            expect(change.getValue()).toMatchObject({'name': 'Test'});
        });

        database.on("delete", '/users/{id}', (event: DeleteEvent) => {
            events.push(event);
        });

        database.on("update", '/user/{id}', (event: UpdateEvent) => {
            events.push(event);
        });

        const reference = database.collection('/users');
        const itemReference = await reference.push({'name': 'Example'});
        const key = itemReference.key();
        await itemReference.set({'name': 'Test'});
        await itemReference.delete();

        expect(events.length).toBe(3);

        // Create
        expect(events[0]['type']).toBe('create');
        expect(events[0]['change']['path']['segments']).toMatchObject(['users', key]);
        expect(events[0]['change']['value']).toMatchObject({'name': 'Example'});

        // Update
        expect(events[1]['type']).toBe('update');
        expect(events[1]['change']['path']['segments']).toMatchObject(['users', key]);
        expect(events[1]['change']['before']).toMatchObject({'name': 'Example'});
        expect(events[1]['change']['value']).toMatchObject({'name': 'Test'});

        // Delete
        expect(events[2]['type']).toBe('delete');
        expect(events[2]['change']['path']['segments']).toMatchObject(['users', key]);
    });

    it('once event', async () => {
        const database = new Database({
            'users': {
                'a': {'name': 'Foo'},
                'b': {'name': 'Bar'}
            }
        });

        const events = [];
        let counter = 0;

        database.once("update", '/users/{id}', (event: CreateEvent) => {
            events.push(event);
            counter++;
        });

        database.once("update", '/users/{id}', (event: CreateEvent) => {
            events.push(event);
            counter++;
        });

        const reference = database.reference('/users/a');
        await reference.set({'name': 'A'});
        await reference.set({'name': 'B'});
        await reference.set({'name': 'C'});

        expect(events.length).toBe(2);
        expect(counter).toBe(2);
    });

    it('off event', async () => {
        const database = new Database({
            'users': {
                'a': {'name': 'Foo'},
                'b': {'name': 'Bar'}
            }
        });

        const onEvents = [];
        const offEvents = [];
        let counter = 0;

        const handler = (event: CreateEvent) => {
            offEvents.push(event);
            counter++;
        };
        database.on("update", '/users/{id}', handler);

        database.on("update", '/users/{id}', (event: CreateEvent) => {
            onEvents.push(event);
            counter++;
        });

        database.off(handler);

        const reference = database.reference('/users/a');
        await reference.set({'name': 'A'});
        await reference.set({'name': 'B'});
        await reference.set({'name': 'C'});

        expect(onEvents.length).toBe(3);
        expect(offEvents.length).toBe(0);
        expect(counter).toBe(3);
    });

});