import { expect } from 'chai';
import 'mocha';
import { Database } from '../src/Database';

describe('Database', () => {

    it('constructor', () => {
        const message = 'Path "/" can only set to object!';

        const database = new Database(undefined as any);
        expect(database.get('/')).to.deep.equal({});

        expect(() => { const database = new Database('Foo' as any); }).to.throw(message);
        expect(() => { const database = new Database(123 as any); }).to.throw(message);
        expect(() => { const database = new Database(123.45 as any); }).to.throw(message);
        expect(() => { const database = new Database(true as any); }).to.throw(message);
        expect(() => { const database = new Database(null as any); }).to.throw(message);
        expect(() => { const database = new Database(['Foo'] as any); }).to.throw(message);
        expect(() => { const database = new Database([] as any); }).to.throw(message);
        expect(() => { const database = new Database(Symbol() as any); }).to.throw(message);
    })

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

});