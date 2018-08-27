/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Server} from '@apibase/server';
import {Logger, LogLevel} from '@apibase/core';
import {Database, Loader, Saver} from '@apibase/database';
import * as fs from 'fs';
import {bindDatabaseEvents} from "./Events/Database";

Logger.setLogLevel(LogLevel.LLLL);

const databaseFile = './data/data.dat';
const database = new Database();
const loader = new Loader(databaseFile);
const saver = new Saver(databaseFile);

loader.load(database);

const save = () => {
    saver.save(database, false);
};
setInterval(save, 10000);

const server = new Server({
    port: 3000,
    webServer: {
        key: fs.readFileSync('./certs/server-key.pem'),
        cert: fs.readFileSync('./certs/server-cert.pem'),
        rejectUnauthorized: false,
        requestCert: false
    },
    server: {
        cookie: 'apibase',
        path: '/apibase',
    }
});

server.on('connect', (client) => {
    Logger.info(client.getHostname(), 'connected!');
    server.addClient(client);
});

bindDatabaseEvents(server, database);

server.on('disconnect', client => {
    Logger.info(client.getHostname(), 'disconnected!');
    // saver.save(database, false);
    server.removeClient(client);
});