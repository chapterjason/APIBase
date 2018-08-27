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
var ServerClient_1 = require("./ServerClient");
var core_1 = require("@apibase/core");
var events = require("events");
var https = require("https");
var SocketIO = require("socket.io");
var Server = /** @class */ (function () {
    function Server(options) {
        var _this = this;
        this.clients = [];
        this.highlevelEvents = [
            'connecting',
            'connect',
            'disconnect'
        ];
        this.options = options;
        this.events = new events.EventEmitter();
        this.webServer = https.createServer(this.options.webServer || {});
        this.webServer.listen(this.options.port || 3306, this.options.hostname || 'localhost', function () {
            core_1.Logger.info('Server listen on ' + _this.getHostname());
        });
        this.server = SocketIO(this.webServer, this.options.server);
        this.server.on('connection', this.listener.bind(this));
    }

    Server.prototype.getServer = function () {
        return this.server;
    };
    Server.prototype.getWebServer = function () {
        return this.webServer;
    };
    Server.prototype.getHostname = function () {
        var address = this.webServer.address();
        if (typeof address === 'string') {
            return address;
        }
        else {
            return address.address + ':' + address.port;
        }
    };
    Server.prototype.hasClient = function (client) {
        return this.clients.indexOf(client) > -1;
    };
    Server.prototype.addClient = function (client) {
        if (!this.hasClient(client)) {
            this.clients.push(client);
        }
        return this;
    };
    Server.prototype.removeClient = function (client) {
        client.removeAllListeners();
        var index = this.clients.indexOf(client);
        if (index > -1) {
            this.clients.splice(index, 1);
        }
        return this;
    };
    Server.prototype.on = function (event, listener) {
        this.events.on(event, listener);
        var _loop_1 = function (client) {
            client.on(event, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                listener.apply(void 0, [client].concat(args));
            });
        };
        // apply to all clients
        for (var _i = 0, _a = this.clients; _i < _a.length; _i++) {
            var client = _a[_i];
            _loop_1(client);
        }
        return this;
    };
    Server.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a, _b;
        if (this.highlevelEvents.indexOf(event) > -1) {
            (_a = this.events).emit.apply(_a, [event].concat(args));
            return this;
        }
        (_b = this.server.sockets).emit.apply(_b, [event].concat(args));
        return this;
    };
    Server.prototype.listener = function (socket) {
        var _this = this;
        var client = new ServerClient_1.ServerClient({socket: socket});
        client.on('disconnect', function () {
            return _this.emit('disconnect', client);
        });
        this.emit('connect', client);
        // reapply all before created events
        for (var _i = 0, _a = this.events.eventNames(); _i < _a.length; _i++) {
            var eventName = _a[_i];
            if (typeof eventName === 'string') {
                var listeners = this.events.listeners(eventName);
                var _loop_2 = function (listener) {
                    client.on(eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        listener.apply(void 0, [client].concat(args));
                    });
                };
                for (var _b = 0, listeners_1 = listeners; _b < listeners_1.length; _b++) {
                    var listener = listeners_1[_b];
                    _loop_2(listener);
                }
            }
        }
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=Server.js.map