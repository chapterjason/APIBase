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

describe('Reference', () => {

    interface Author {
        name: string;
    }

    interface AuthorCollection {
        [key: string]: Author;
    }

    interface Post {
        title: string;
        content: string;
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

    it('getPath', () => {
        const reference = database.reference<string>('/posts/one/title');
        expect(reference.getPath().toString()).to.equal('/posts/one/title');
    });

    it('key', () => {
        const reference = database.reference<string>('/posts/one/title');
        expect(reference.key()).to.equal('title');
    });

    it('toJSON', () => {
        const reference = database.reference<string>('/posts/one/title');
        expect(reference.toJSON()).to.deep.equal({path: '/posts/one/title', value: 'FooTitle'});
    });

    it('parent', () => {
        const reference = database.reference<string>('/posts/one/title');
        const parent = reference.parent<Post>();

        expect(parent.get().value()).to.deep.equal({
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

    it('parent of first level', () => {
        const reference = database.reference<string>('/posts');
        const parent = reference.parent<{ posts: PostCollection }>();

        expect(parent.getPath().toString()).to.equal('/');
    });

    it('parent of root', () => {
        const reference = database.reference<string>('/');
        const parent = reference.parent<Post>();

        expect(parent).to.equal(null);
    });

    it('reference', () => {
        const postReference = database.reference<string>('/posts/one');
        const reference = postReference.reference<string>('title');

        expect(reference.get().value()).to.equal('FooTitle');
    });

    it('collection', () => {
        const postReference = database.reference<string>('/posts/one');
        const authorReference = postReference.collection<Author>('authors');

        expect(authorReference.get().value()).to.deep.equal({
            'first': {
                name: 'FooName'
            },
            'second': {
                name: 'BarName'
            }
        });
    });

    it('set', () => {
        const reference = database.reference<string>('/posts/one/title');

        reference.set('NewTitle');

        expect(database.get('/posts/one/title')).to.equal('NewTitle');
    });

    it('get', () => {
        const reference = database.reference<string>('/posts/one/title');
        expect(reference.get().value()).to.equal('FooTitle');
    });

    it('delete', () => {
        const reference = database.reference<string>('/posts/one/title');

        reference.delete();

        const parentReference = reference.parent();

        expect(parentReference.get().value()).to.deep.equal({
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

});