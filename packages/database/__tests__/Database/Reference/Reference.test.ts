/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

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

    beforeEach(async () => {
        return database.set('/', {
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
        expect(reference.getPath().toString()).toBe('/posts/one/title');
    });

    it('key', () => {
        const reference = database.reference<string>('/posts/one/title');
        expect(reference.key()).toBe('title');
    });

    it('toJSON', async () => {
        const reference = database.reference<string>('/posts/one/title');

        return reference.toJSON().then(result => {
            expect(result).toMatchObject({path: '/posts/one/title', value: 'FooTitle'});
        })
    });

    it('parent', async () => {
        const reference = database.reference<string>('/posts/one/title');
        const parent = reference.parent<Post>();

        return parent.get().then(snapshot => {
            expect(snapshot.value()).toMatchObject({
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
        })

    });

    it('parent of first level', () => {
        const reference = database.reference<string>('/posts');
        const parent = reference.parent<{ posts: PostCollection }>();

        expect(parent.getPath().toString()).toBe('/');
    });

    it('parent of root', () => {
        const reference = database.reference<string>('/');
        const parent = reference.parent<Post>();

        expect(parent).toBe(null);
    });

    it('reference', async () => {
        const postReference = database.reference<string>('/posts/one');
        const reference = postReference.reference<string>('title');

        return reference.get().then(snapshot => {
            expect(snapshot.value()).toBe('FooTitle');
        });
    });

    it('collection', async () => {
        const postReference = database.reference<string>('/posts/one');
        const authorReference = postReference.collection<Author>('authors');

        return authorReference.get().then(snapshot => {
            expect(snapshot.value()).toMatchObject({
                'first': {
                    name: 'FooName'
                },
                'second': {
                    name: 'BarName'
                }
            });
        });
    });

    it('set', async () => {
        const reference = database.reference<string>('/posts/one/title');

        return reference.set('NewTitle')
            .then(() => {
                database.get('/posts/one/title').then(value => {
                    expect(value).toBe('NewTitle');
                });
            });
    });

    it('get', async () => {
        const reference = database.reference<string>('/posts/one/title');
        return reference.get().then(snapshot => {
            expect(snapshot.value()).toBe('FooTitle');
        });
    });

    it('delete', async () => {
        const reference = database.reference<string>('/posts/one/title');

        return reference.delete().then((result) => {
            expect(result).toBeTruthy();
            return reference.parent().get();
        }).then(snapshot => {
            expect(snapshot.value()).toMatchObject({
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
});