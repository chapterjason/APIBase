/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Logger, LogLevel} from '@apibase/core';
import {database, save} from "./Database";
import * as express from 'express';
import * as cors from 'cors';
import {DatabaseSet} from "./Handler/DatabaseSet";
import {DatabaseDelete} from "./Handler/DatabaseDelete";
import {DatabaseGet} from "./Handler/DatabaseGet";
import {DatabaseSync} from "./Handler/DatabaseSync";

Logger.setLogLevel(LogLevel.LLLL);

const server = express();

// body will be parsed as json
server.use(express.json());

// response json as default
server.use((request, response, next) => {
    response.header('Content-Type', 'application/json');
    next();
});

// set cors header
server.use(cors());

// database handler
server.use(DatabaseGet(database));
server.use(DatabaseSet(database, save));
server.use(DatabaseDelete(database, save));
server.use(DatabaseSync(database, save));

server.all('*', (request, response) => {
});

server.listen(3000, () => console.log('Example-server listening on port 3000!'));