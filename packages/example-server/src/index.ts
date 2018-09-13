/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Logger, LogLevel, Path} from '@apibase/core';
import {database, save} from "./Database";
import * as express from 'express';
import * as cors from 'cors';
import {ResponseError} from "./Response/ResponseError";
import {ResponseSuccess} from "./Response/ResponseSuccess";

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

server.use((request, response, next) => {
    const path = new Path(request.path);
    if (request.method === 'GET') { // get
        try {
            const data = database.get(path);
            response.send(new ResponseSuccess(data));
        } catch (error) {
            response.status(500);
            response.send(new ResponseError(error.message));
        }
    } else if (request.method === 'POST') { // set
        try {
            const collectionReference = database.collection(path);
            const reference = collectionReference.push(request.body);
            response.send(new ResponseSuccess(database.get(reference.getPath())));
        } catch (error) {
            response.status(500);
            response.send(new ResponseError(error.message));
        }
    } else if (request.method === 'PUT') { // set
        try {
            response.send(new ResponseSuccess(database.set(path, request.body)));
        } catch (error) {
            response.status(500);
            response.send(new ResponseError(error.message));
        }
    } else if (request.method === 'DELETE') { // delete
        try {
            response.send(new ResponseSuccess(database.delete(path)));
        } catch (error) {
            response.status(500);
            response.send(new ResponseError(error.message));
        }
    }

    save();
});

server.all('*', (request, response) => {
});

server.listen(3000, () => console.log('Example-server listening on port 3000!'));