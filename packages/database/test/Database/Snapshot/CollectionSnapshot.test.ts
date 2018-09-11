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
import {Database} from "../../../src";

describe('CollectionSnapshot', () => {

    interface Author {
        name: string;
    }

    interface AuthorCollection {
        [key: string]: Author;
    }

    interface Post {
        title: string;
        content: string;
        tags?: string[];
        authors: AuthorCollection;
    }

    interface PostCollection {
        [key: string]: Post;
    }

    const database = new Database();

    beforeEach(() => {
        database.set('/', {
            'posts': {
                'one': {
                    title: 'FooTitle',
                    content: 'FooContent',
                    authors: {
                        'first': {
                            name: 'FooName'
                        },
                        'second': {
                            name: 'BarName'
                        }
                    }
                },
                'two': {
                    title: 'BarTitle',
                    content: 'BarContent',
                    tags: ['Foo', 'Bar'],
                    authors: {
                        'first': {
                            name: 'FooName'
                        },
                        'second': {
                            name: 'BarName'
                        }
                    }
                }
            } as PostCollection
        });
    });

    it('item', () => {
        const reference = database.collection<Post>('/posts');
        const snapshot = reference.get();

        const onePost = snapshot.item('one');

        expect(onePost.value()).to.deep.equal({
            title: 'FooTitle',
            content: 'FooContent',
            authors: {
                'first': {
                    name: 'FooName'
                },
                'second': {
                    name: 'BarName'
                }
            }
        });
    });

    it('length', () => {
        const reference = database.collection<Post>('/posts');
        const snapshot = reference.get();
        expect(snapshot.length()).to.equal(2);
    });

    it('keys of array', () => {
        const reference = database.collection<string[]>('/posts/two/tags');
        const snapshot = reference.get();
        expect(snapshot.length()).to.equal(2);
    });

    it('keys non object or array', () => {
        const reference = database.collection<string>('/posts/two/title');
        const snapshot = reference.get();
        expect(snapshot.length()).to.equal(0);
    });

    it('forEach', () => {
        const reference = database.collection<Post>('/posts');
        const snapshot = reference.get();

        const expectedValues = [
            database.reference<Post>('/posts/one').get().value(),
            database.reference<Post>('/posts/two').get().value()
        ];

        const values = [];

        snapshot.forEach((item) => {
            values.push(item.value());
        });

        expect(values).to.deep.equal(expectedValues);
    });

    it('forEach', () => {
        const reference = database.collection<Post>('/posts');
        const snapshot = reference.get();

        const expectedValues = [
            database.reference<Post>('/posts/two').get().value(),
            database.reference<Post>('/posts/one').get().value()
        ];

        const values = [];

        snapshot.sortByKey();
        snapshot.reverse();

        snapshot.forEach((item) => {
            values.push(item.value());
        });

        expect(values).to.deep.equal(expectedValues);
    });

    it('forEach', () => {
        const reference = database.collection<Post>('/posts');
        const snapshot = reference.get();

        const expectedValues = [
            database.reference<Post>('/posts/two').get().value(),
            database.reference<Post>('/posts/one').get().value()
        ];

        const values = [];

        snapshot.sortByProperty('title');

        snapshot.forEach((item) => {
            values.push(item.value());
        });

        expect(values).to.deep.equal(expectedValues);
    });

});