/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

"use strict";
/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */
Object.defineProperty(exports, "__esModule", {value: true});
var client_1 = require("@apibase/client");
var core_1 = require("@apibase/core");
core_1.Logger.setLogLevel(core_1.LogLevel.LLLL);
var client = new client_1.Client({
    uri: 'https://127.0.0.1:7955',
    client: {
        rejectUnauthorized: false,
        ca: ['../example-server/certs/server-cert.pem'],
        path: '/apibase',
        secure: true,
        extraHeaders: {
            'Authorization': 'Bearer wfnio9w3j9r38t49fu',
        }
    }
});
client.on('connect', function () {
    core_1.Logger.info('Connected!');
    client.emit('associate');
    client.emit('test', 8, function (result) {
        if (result.success) {
            core_1.Logger.debug(result.data.result);
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
client.on('error', function (error) {
    core_1.Logger.error('Something went wrong...', error.message);
});
client.on('connect_error', function (error) {
    core_1.Logger.error('Something went wrong while trying to connect...', error.message);
});
client.on('connect_timeout', function (timeout) {
    core_1.Logger.error('Connection timeout...', timeout);
});
client.on('reconnect', function (attemptNumber) {
    core_1.Logger.info('Reconnected after', attemptNumber, 'attempts');
});
client.on('reconnect_attempt', function (attempt) {
    core_1.Logger.info('Trying to reconnect...', attempt);
});
client.on('reconnect_error', function (error) {
    core_1.Logger.error('Erorr while reconnecting!', error.message);
});
client.on('disconnect', function (message) {
    core_1.Logger.info('Disconnected!', message);
});
//# sourceMappingURL=index.js.map