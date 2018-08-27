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
    uri: 'https://127.0.0.1:3000',
    client: {
        rejectUnauthorized: false,
        // ca: ['../example-server/certs/server-cert.pem'],
        path: '/apibase',
        secure: true,
    }
});

client.on('connect', () => {
    Logger.info('Connected!');
    client.emit('database-get', '/users', (result) => {
        Logger.debug(result);
    });
});

client.on('disconnect', () => {
    Logger.info('Disconnected!');
});