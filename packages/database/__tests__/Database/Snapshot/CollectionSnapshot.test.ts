/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

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
        return reference.get().then(snapshot => {
            const onePost = snapshot.item('one');

            expect(onePost.value()).toMatchObject({
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
    });

    it('length', async () => {
        const reference = database.collection<Post>('/posts');
        return reference.get().then(snapshot => {
            expect(snapshot.length()).toBe(2);
        });
    });

    it('keys of array', async () => {
        const reference = database.collection<string[]>('/posts/two/tags');
        return reference.get().then(snapshot => {
            expect(snapshot.length()).toBe(2);
        });
    });

    it('path non object or array', async () => {
        const reference = database.collection<string>('/posts/two/title');
        return reference.get().catch(error => {
            expect(error.toString()).toBe('Error: The data at "/posts/two/title" must be of type object or array.');
        });
    });

    it('forEach', async () => {
        const reference = database.collection<Post>('/posts');
        return reference.get().then(snapshot => {

            const values = [];

            snapshot.forEach((item) => {
                values.push(item.value());
            });

            expect(values).toMatchObject([{
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
                {
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
                }]);
        });
    });

    // @todo map test

    // @todo custom sort

    it('sortedByKey', async () => {
        const reference = database.collection<Post>('/posts');
        return reference.get().then(snapshot => {

            const values = [];

            snapshot.sortByKey();
            snapshot.reverse();

            snapshot.forEach((item) => {
                values.push(item.value());
            });

            expect(values).toMatchObject([{
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
            }, {
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
            }]);
        });
    });

    it('sortedByProperty', async () => {
        const reference = database.collection<Post>('/posts');
        return reference.get().then(snapshot => {

            const values = [];

            snapshot.sortByProperty('title');

            snapshot.forEach((item) => {
                values.push(item.value());
            });

            expect(values).toMatchObject([{
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
            }, {
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
            }]);
        });
    });

});