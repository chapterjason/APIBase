/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Database} from "../../../src";

describe('CollectionReference', () => {

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

    it('get', async () => {
        const reference = database.collection<Post>('/posts');
        return reference.get()
            .then(snapshot => {
                expect(snapshot.value()).toMatchObject({
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
                });
            })
    });

    it('push without value', async () => {
        const reference = database.collection<Post>('/posts');

        const itemReference = await reference.push();
        const setResult = await itemReference.set({
            title: 'FooBarTitle',
            content: 'FooBarContent',
            authors: {'first': {name: 'FooBarName'}}
        });

        expect(setResult).toBeTruthy();

        const snapshot = await itemReference.get();

        expect(snapshot.value()).toMatchObject({
            title: 'FooBarTitle',
            content: 'FooBarContent',
            authors: {'first': {name: 'FooBarName'}}
        });

        const expected = {
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
        };

        expected[itemReference.key()] = {
            title: 'FooBarTitle',
            content: 'FooBarContent',
            authors: {'first': {name: 'FooBarName'}}
        };

        const allSnapshot = await reference.get();
        expect(allSnapshot.value()).toMatchObject(expected);
    });

    it('push with value', async () => {
        const reference = database.collection<Post>('/posts');

        return reference.push({
            title: 'FooBarTitle',
            content: 'FooBarContent',
            authors: {'first': {name: 'FooBarName'}}
        }).then(itemReference => {
            return itemReference.get().then(snapshot => {
                expect(snapshot.value()).toMatchObject({
                    title: 'FooBarTitle',
                    content: 'FooBarContent',
                    authors: {'first': {name: 'FooBarName'}}
                });

                return reference.get();
            }).then(snapshot => {
                const expected = {
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
                };
                expected[itemReference.key()] = {
                    title: 'FooBarTitle',
                    content: 'FooBarContent',
                    authors: {'first': {name: 'FooBarName'}}
                };

                expect(snapshot.value()).toMatchObject(expected);
            });
        });
    });
});