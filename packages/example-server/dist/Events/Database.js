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
var core_1 = require("@apibase/core");

function bindDatabaseEvents(server, database) {
    server.on('database-set', function (client, path, value, fn) {
        core_1.Logger.debug('database-set', client.getHostname(), path);
        try {
            database.set(path, value);
            fn({success: true});
        }
        catch (error) {
            core_1.Logger.debug('database-set', client.getHostname(), error.message);
            fn({success: false, error: error.message});
        }
    });
    server.on('database-get', function (client, path, fn) {
        core_1.Logger.debug('database-get', client.getHostname(), path);
        try {
            var result = database.get(path);
            core_1.Logger.debug('database-get', client.getHostname(), result);
            fn({success: true, result: result});
        }
        catch (error) {
            core_1.Logger.debug('database-get', client.getHostname(), error.message);
            fn({success: false, error: error.message});
        }
    });
    server.on('database-push', function (client, path, value, fn) {
        core_1.Logger.debug('database-push', client.getHostname(), path);
        try {
            var result = database.push(path, value);
            fn({success: true, result: result});
        }
        catch (error) {
            core_1.Logger.debug('database-push', client.getHostname(), error.message);
            fn({success: false, error: error.message});
        }
    });
    server.on('database-delete', function (client, path, fn) {
        core_1.Logger.debug('database-delete', client.getHostname(), path);
        try {
            var result = database.delete(path);
            fn({success: result});
        }
        catch (error) {
            core_1.Logger.debug('database-delete', client.getHostname(), error.message);
            fn({success: false, error: error.message});
        }
    });
}

exports.bindDatabaseEvents = bindDatabaseEvents;
//# sourceMappingURL=Database.js.map