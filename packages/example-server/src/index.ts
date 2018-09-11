/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Server, ServerClient} from '@apibase/server';
import {Logger, LogLevel} from '@apibase/core';
import {Database} from '@apibase/database';
import * as fs from 'fs';
import {ResponseError} from "./Response/ResponseError";
import {ResponseSuccess} from "./Response/ResponseSuccess";

Logger.setLogLevel(LogLevel.LLLL);

interface User {
    username: string;
    password: string;
    token: string;
}

const usersDatabase = new Database({
    'users': {}
});

// const userRepository = usersDatabase.repository<User>('/users');
// userRepository.push({username: 'chapterjason', password: 'EXAMPLE321', token: 'wfnio9w3j9r38t49fu'});

const server = new Server({
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

// @note authserver
// const authenticationNamespace = server.getServer().of('/authentication');
// authenticationNamespace.on('authenticate', (client, username, password, fn) => {
//     const user = userRepository.findOneBy({"username": username});
//
//     if (user) {
//         if (user.password === password) {
//             fn(new ResponseSuccess(user.token));
//         } else {
//             fn(new ResponseError('Incorrect password!'));
//         }
//     } else {
//         fn(new ResponseError('User not found!'));
//     }
// });

function parseToken(header: string) {
    const regex = /^Bearer (.*)$/;
    let match;

    if ((match = regex.exec(header)) !== null) {
        const token = match[1];
        // return userRepository.findOneBy({"token": token});
    }

    return null;
}

server.getServer().use((socket, next) => {
    const authorization = socket.request.headers['authorization'] || '';
    const user = parseToken(authorization);

    if (user) {
        next();
        return;
    }

    next(new Error('Authentication error'));
});

server.on('connect', (client) => {
    Logger.info(client.getHostname(), 'connected!');
    server.addClient(client);
});

server.on('associate', (client: ServerClient) => {
    const authorization = client.getSocket().request.headers['authorization'] || '';
    const user = parseToken(authorization);
    if (user) {
        client.getStorage().set('user', user);
    }
});

server.on('test', (client, value, fn) => {
    fn(new ResponseSuccess({'user': client.getStorage().get('user'), 'result': value * 8}));
});

server.on('disconnect', client => {
    Logger.info(client.getHostname(), 'disconnected!');
    server.removeClient(client);
});