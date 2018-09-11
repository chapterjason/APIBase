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
var SocketIOClient = require("socket.io-client");
var Client = /** @class */ (function () {
    function Client(options) {
        this.options = options;
        this.socket = SocketIOClient.connect(this.options.uri, this.options.client);
    }
    Client.prototype.on = function (event, listener) {
        this.socket.on(event, listener);
        return this;
    };
    Client.prototype.off = function (event, listener) {
        this.socket.off(event, listener);
        return this;
    };
    Client.prototype.once = function (event, listener) {
        this.socket.once(event, listener);
        return this;
    };
    Client.prototype.addListener = function (event, listener) {
        this.socket.addEventListener(event, listener);
        return this;
    };
    Client.prototype.removeListener = function (event, listener) {
        this.socket.removeListener(event, listener);
        return this;
    };
    Client.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a;
        (_a = this.socket).emit.apply(_a, [event].concat(args));
        return this;
    };
    Client.prototype.removeAllListeners = function () {
        this.socket.removeAllListeners();
        return this;
    };
    Client.prototype.getSocket = function () {
        return this.socket;
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=Client.js.map