/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var client_1 = require("@apibase/client");
var core_1 = require("@apibase/core");
core_1.Logger.setLogLevel(core_1.LogLevel.LLLL);
var client = new client_1.Client({
    uri: 'https://127.0.0.1:3000',
    client: {
        rejectUnauthorized: false,
        ca: ['../example-server/certs/server-cert.pem'],
        path: '/apibase',
        secure: true
    }
});
client.on('connect', function () {
    core_1.Logger.info('Connected!');
    client.emit('database-get', '/users', function (result) {
        core_1.Logger.debug(result);
    });
});
client.on('disconnect', function () {
    core_1.Logger.info('Disconnected!');
});
//# sourceMappingURL=index.js.map