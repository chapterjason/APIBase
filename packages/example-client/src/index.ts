/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Client} from '@apibase/client';
import {Logger, LogLevel} from '@apibase/core';

Logger.setLogLevel(LogLevel.LLLL);

const client = new Client({
    uri: 'https://127.0.0.1:7955',
    client: {
        rejectUnauthorized: false,
        ca: ['../example-server/certs/server-cert.pem'],
        path: '/apibase',
        secure: true,
        extraHeaders: {
            'Authorization': 'Bearer wfnio9w3j9r38t49fu',
        }
    } as any
});

client.on('connect', () => {
    Logger.info('Connected!');
    client.emit('associate');
    client.emit('test', 8, (result) => {
        if (result.success) {
            Logger.debug(result.data.result);
        }
        // Logger.debug(result);
    });
});

/*
// Event: 'connect'
// Event: 'connect_error'
// Event: 'connect_timeout'
// Event: 'error'
// Event: 'disconnect'
// Event: 'reconnect'
// Event: 'reconnect_attempt'
Event: 'reconnecting'
// Event: 'reconnect_error'
// Event: 'reconnect_failed'
Event: 'ping'
Event: 'pong'
 */

// Some basics events!
client.on('error', (error) => {
    Logger.error('Something went wrong...', error.message);
});

client.on('connect_error', (error) => {
    Logger.error('Something went wrong while trying to connect...', error.message);
});

client.on('connect_timeout', (timeout) => {
    Logger.error('Connection timeout...', timeout);
});

client.on('reconnect', (attemptNumber) => {
    Logger.info('Reconnected after', attemptNumber, 'attempts');
});

client.on('reconnect_attempt', (attempt) => {
    Logger.info('Trying to reconnect...', attempt);
});

client.on('reconnect_error', (error) => {
    Logger.error('Erorr while reconnecting!', error.message);
});

client.on('disconnect', (message) => {
    Logger.info('Disconnected!', message);
});