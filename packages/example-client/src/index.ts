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
*/

/*
const collection = database.collection('users');
const snapshot = collection.get();

Logger.log(snapshot);
*/
    // .get()
    // .forEach(user => {
    //     user
    //         .value()
    //         .then(users => {
    //             Logger.debug(users);
    //         })
    //         .catch(error => {
    //             Logger.error(error);
    //         });
    // });

    
interface CollectionIndex<CollectionType> {
    [id: string]: CollectionType;
}

interface User {
    name: string;
}

const reference = database.reference<User>('users');
const snapshot = reference.get();

// snapshot
//     .value()
//     .then(users => {
//         Logger.debug(users);
//     })
//     .catch(error => {
//         Logger.error(error);
//     });

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

/*
database
    .set('users')
    .then(users => {
        Logger.debug(users);
    })
    .catch(error => {
        Logger.error(error);
    });
    */