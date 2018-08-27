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
var server_1 = require("@apibase/server");
var core_1 = require("@apibase/core");
var database_1 = require("@apibase/database");
var fs = require("fs");
var Database_1 = require("./Events/Database");
core_1.Logger.setLogLevel(core_1.LogLevel.LLLL);
var databaseFile = './data/data.dat';
var database = new database_1.Database();
var loader = new database_1.Loader(databaseFile);
var saver = new database_1.Saver(databaseFile);
loader.load(database);
var save = function () {
    saver.save(database, false);
};
setInterval(save, 10000);
var server = new server_1.Server({
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
server.on('connect', function (client) {
    core_1.Logger.info(client.getHostname(), 'connected!');
    server.addClient(client);
});
Database_1.bindDatabaseEvents(server, database);
server.on('disconnect', function (client) {
    core_1.Logger.info(client.getHostname(), 'disconnected!');
    // saver.save(database, false);
    server.removeClient(client);
});
//# sourceMappingURL=index.js.map