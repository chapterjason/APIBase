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
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["QUIET"] = 0] = "QUIET";
    LogLevel[LogLevel["L"] = 1] = "L";
    LogLevel[LogLevel["LL"] = 2] = "LL";
    LogLevel[LogLevel["LLL"] = 3] = "LLL";
    LogLevel[LogLevel["LLLL"] = 4] = "LLLL";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger() {
    }

    Logger.getTimestamp = function () {
        var now = new Date();
        return now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + ':' + now.getMilliseconds();
    };
    Logger.internalLog = function (type) {
        var messages = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            messages[_i - 1] = arguments[_i];
        }
        console[type === 'error' ? 'error' : 'log'].apply(console, ['[' + this.getTimestamp() + ']', '[' + type.toUpperCase() + ']'].concat(Array.from(arguments).slice(1)));
    };
    Logger.setLogLevel = function (level) {
        Logger.level = level;
    };
    Logger.error = function (message) {
        var messages = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            messages[_i - 1] = arguments[_i];
        }
        if (Logger.level >= LogLevel.L) {
            Logger.internalLog.apply(Logger, ['error'].concat(Array.from(arguments)));
        }
    };
    Logger.warn = function (message) {
        var messages = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            messages[_i - 1] = arguments[_i];
        }
        if (Logger.level >= LogLevel.LL) {
            Logger.internalLog.apply(Logger, ['warn'].concat(Array.from(arguments)));
        }
    };
    Logger.info = function (message) {
        var messages = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            messages[_i - 1] = arguments[_i];
        }
        if (Logger.level >= LogLevel.LLL) {
            Logger.internalLog.apply(Logger, ['info'].concat(Array.from(arguments)));
        }
    };
    Logger.log = function (message) {
        var messages = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            messages[_i - 1] = arguments[_i];
        }
        if (Logger.level >= LogLevel.LLL) {
            Logger.internalLog.apply(Logger, ['log'].concat(Array.from(arguments)));
        }
    };
    Logger.debug = function (message) {
        var messages = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            messages[_i - 1] = arguments[_i];
        }
        if (Logger.level >= LogLevel.LLLL) {
            Logger.internalLog.apply(Logger, ['debug'].concat(Array.from(arguments)));
        }
    };
    Logger.level = LogLevel.LLL;
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map