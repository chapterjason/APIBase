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
import {ChangeType} from "@apibase/database";

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

server.use(async (request, response, next) => {
    const path = new Path(request.path);
    if (request.method === 'GET') { // get
        Logger.info('GET', path.toString());
        try {
            const data = await database.get(path);
            response.send(new ResponseSuccess(data));
        } catch (error) {
            response.status(500);
            response.send(new ResponseError(error.message));
        }
    } else if (request.method === 'POST') { // sync
        Logger.info('SYNC', path.toString());

        const changes = request.body;
        const commits: number[] = [];

        try {
            for (let i = 0; i < changes.length; i++) {
                const change = changes[i];

                if (change.type === ChangeType.SET) {
                    await database.set(change.path, change.value);
                } else if (change.type === ChangeType.DELETE) {
                    await database.delete(change.path);
                }

                commits.push(i);
            }
        } catch (error) {
            Logger.error(error);
        } finally {
            for (let i = commits.length - 1; i >= 0; i--) {
                changes.splice(commits[i], 1);
            }
        }

        if (changes.length > 0) {
            response.send(new ResponseError(changes));
        } else {
            response.send(new ResponseSuccess(await database.get('/')));
        }
    } else if (request.method === 'PUT') { // set
        Logger.info('SET', path.toString());
        try {
            response.send(new ResponseSuccess(await database.set(path, request.body)));
        } catch (error) {
            response.status(500);
            response.send(new ResponseError(error.message));
        }
    } else if (request.method === 'DELETE') { // delete
        Logger.info('DELETE', path.toString());
        try {
            response.send(new ResponseSuccess(await database.delete(path)));
        } catch (error) {
            response.status(500);
            response.send(new ResponseError(error.message));
        }
    }

    await save();
});

server.all('*', (request, response) => {
});

server.listen(3000, () => console.log('Example-server listening on port 3000!'));