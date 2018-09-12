/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {createdAt, Logger, LogLevel} from '@apibase/core';
import {ClientDatabase} from "./Database/Database";

Logger.setLogLevel(LogLevel.LLLL);

Logger.debug('Init');

const database = new ClientDatabase('http://localhost:3000');

/*
not working --- need to reimplement references and snapshots --- performance ---> get all values than localy do the collection thing

database
    .collection('users')
    .get()
    .forEach(user => {
        user
            .value()
            .then(users => {
                Logger.debug(users);
            })
            .catch(error => {
                Logger.error(error);
            });
    });
*/

/*
database
    .reference('users')
    .get()
    .value()
    .then(users => {
        Logger.debug(users);
    })
    .catch(error => {
        Logger.error(error);
    });
*/

/*
database
    .get('users')
    .then(users => {
        Logger.debug(users);
    })
    .catch(error => {
        Logger.error(error);
    });
*/
