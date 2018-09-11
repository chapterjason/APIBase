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

    it('get', () => {
        const reference = database.collection<Post>('/posts');
        expect(reference.get().value()).to.deep.equal({
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
    });

    it('push without value', () => {
        const reference = database.collection<Post>('/posts');

        const pushReference = reference.push();
        pushReference.set({title: 'FooBarTitle', content: 'FooBarContent', authors: {'first': {name: 'FooBarName'}}});

        expect(pushReference.get().value()).to.deep.equal({
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

        expected[pushReference.key()] = {
            title: 'FooBarTitle',
            content: 'FooBarContent',
            authors: {'first': {name: 'FooBarName'}}
        };

        expect(reference.get().value()).to.deep.equal(expected)
    });

    it('push with value', () => {
        const reference = database.collection<Post>('/posts');

        const pushReference = reference.push({
            title: 'FooBarTitle',
            content: 'FooBarContent',
            authors: {'first': {name: 'FooBarName'}}
        });

        expect(pushReference.get().value()).to.deep.equal({
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

        expected[pushReference.key()] = {
            title: 'FooBarTitle',
            content: 'FooBarContent',
            authors: {'first': {name: 'FooBarName'}}
        };

        expect(reference.get().value()).to.deep.equal(expected)
    });

});