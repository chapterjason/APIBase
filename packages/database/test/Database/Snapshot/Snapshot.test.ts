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

describe('Snapshot', () => {

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

    it('value', () => {
        const reference = database.reference<string>('/posts/one/title');
        const snapshot = reference.get();

        expect(snapshot.value()).to.equal('FooTitle')
    });

    it('key', () => {
        const reference = database.reference<string>('/posts/one/title');
        const snapshot = reference.get();

        expect(snapshot.key()).to.equal('title')
    });

});