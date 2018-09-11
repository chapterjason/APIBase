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
var server_1 = require("@apibase/server");
var core_1 = require("@apibase/core");
var database_1 = require("@apibase/database");
var fs = require("fs");
var ResponseSuccess_1 = require("./Response/ResponseSuccess");
core_1.Logger.setLogLevel(core_1.LogLevel.LLLL);
var usersDatabase = new database_1.Database({
    'users': {}
});
// const userRepository = usersDatabase.repository<User>('/users');
// userRepository.push({username: 'chapterjason', password: 'EXAMPLE321', token: 'wfnio9w3j9r38t49fu'});
var server = new server_1.Server({
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
function parseToken(header) {
    var regex = /^Bearer (.*)$/;
    var match;
    if ((match = regex.exec(header)) !== null) {
        var token = match[1];
        // return userRepository.findOneBy({"token": token});
    }
    return null;
}

server.getServer().use(function (socket, next) {
    var authorization = socket.request.headers['authorization'] || '';
    var user = parseToken(authorization);
    if (user) {
        next();
        return;
    }
    next(new Error('Authentication error'));
});
server.on('connect', function (client) {
    core_1.Logger.info(client.getHostname(), 'connected!');
    server.addClient(client);
});
server.on('associate', function (client) {
    var authorization = client.getSocket().request.headers['authorization'] || '';
    var user = parseToken(authorization);
    if (user) {
        client.getStorage().set('user', user);
    }
});
server.on('test', function (client, value, fn) {
    fn(new ResponseSuccess_1.ResponseSuccess({'user': client.getStorage().get('user'), 'result': value * 8}));
});
server.on('disconnect', function (client) {
    core_1.Logger.info(client.getHostname(), 'disconnected!');
    server.removeClient(client);
});
//# sourceMappingURL=index.js.map