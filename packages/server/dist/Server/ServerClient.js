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
var ServerClient = /** @class */ (function () {
    function ServerClient(options) {
        this.storage = new core_1.DataStorage();
        this.options = options;
        var address = this.options.socket.handshake.address;
        if (typeof address === 'string') {
            this.storage.set('hostname', address);
        }
    }
    ServerClient.prototype.on = function (event, listener) {
        this.options.socket.on(event, listener);
        return this;
    };
    ServerClient.prototype.off = function (event, listener) {
        this.options.socket.off(event, listener);
        return this;
    };
    ServerClient.prototype.once = function (event, listener) {
        this.options.socket.once(event, listener);
        return this;
    };
    ServerClient.prototype.addListener = function (event, listener) {
        this.options.socket.addListener(event, listener);
        return this;
    };
    ServerClient.prototype.removeListener = function (event, listener) {
        this.options.socket.removeListener(event, listener);
        return this;
    };
    ServerClient.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a;
        (_a = this.options.socket).emit.apply(_a, [event].concat(args));
        return this;
    };
    ServerClient.prototype.removeAllListeners = function () {
        this.options.socket.removeAllListeners();
        return this;
    };
    ServerClient.prototype.getSocket = function () {
        return this.options.socket;
    };
    ServerClient.prototype.getStorage = function () {
        return this.storage;
    };
    ServerClient.prototype.getHostname = function () {
        return this.options.socket.id;
    };
    return ServerClient;
}());
exports.ServerClient = ServerClient;
//# sourceMappingURL=ServerClient.js.map