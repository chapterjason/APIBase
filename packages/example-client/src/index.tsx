/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Logger, LogLevel } from '@apibase/core';
import { Example } from './Component/Example';
Logger.setLogLevel(LogLevel.LLLL);
Logger.debug('Init');

function ready(callback) {
    if (document.readyState != 'loading') { // in case the document is already rendered
        callback();
    } else if (document.addEventListener) { // modern browsers
        document.addEventListener('DOMContentLoaded', callback);
    } else { // IE <= 8
        (document as any).attachEvent('onreadystatechange', () => {
            if (document.readyState == 'complete') { callback(); }
        });
    }
}


ready(() => {
    const target = document.getElementById('example');
    ReactDOM.render(<Example />, target);
});

// WORKING
/*
const reference = database.collection<User>('users');

reference
    .set({ 'fooid': { 'name': 'Foo' }, 'barid': { 'name': 'Bar' }, 'testid': { 'name': 'ATest' } })
    .then((inserted) => {
        Logger.debug('reference set', reference.key(), inserted);
        return reference.push({ name: 'Jason' });
    })
    .then(snapshot => {
        Logger.debug('reference push', snapshot);
        return reference.get();
    })
    .then(snapshot => {
        Logger.debug('reference get');
        snapshot.sortByProperty('name').forEach(item => {
            Logger.debug(item.key(), item.value());
        });
    })
    .catch(error => {
        Logger.error(error);
    });
*/

// WORKING
/*
const reference = database.reference<CollectionIndex<User>>('users');

reference
    .set({ 'fooid': { 'name': 'Foo' }, 'barid': { 'name': 'Bar' }, 'testid': { 'name': 'Test' } })
    .then((inserted) => {
        Logger.debug('reference set', inserted);
        return reference.get();
    })
    .then(snapshot => {
        Logger.debug('reference get', snapshot);
        return reference.reference('barid').delete()
    })
    .then(deleted => {
        Logger.debug('reference delete', deleted);
        return reference.get();
    })
    .then(snapshot => {
        Logger.debug('reference get', snapshot);
    })
    .catch(error => {
        Logger.error(error);
    });
*/