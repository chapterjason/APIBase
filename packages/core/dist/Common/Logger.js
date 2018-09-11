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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) {
        e = {error: error};
    }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", {value: true});
var String_1 = require("./String");
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
    Logger.setLogLevel = function (level) {
        Logger.level = level;
    };
    Logger.error = function (message) {
        var messages = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            messages[_i - 1] = arguments[_i];
        }
        if (Logger.level >= LogLevel.L) {
            Logger.internalLog.apply(Logger, __spread(['error'], Array.from(arguments)));
        }
    };
    Logger.warn = function (message) {
        var messages = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            messages[_i - 1] = arguments[_i];
        }
        if (Logger.level >= LogLevel.LL) {
            Logger.internalLog.apply(Logger, __spread(['warn'], Array.from(arguments)));
        }
    };
    Logger.info = function (message) {
        var messages = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            messages[_i - 1] = arguments[_i];
        }
        if (Logger.level >= LogLevel.LLL) {
            Logger.internalLog.apply(Logger, __spread(['info'], Array.from(arguments)));
        }
    };
    Logger.log = function (message) {
        var messages = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            messages[_i - 1] = arguments[_i];
        }
        if (Logger.level >= LogLevel.LLL) {
            Logger.internalLog.apply(Logger, __spread(['log'], Array.from(arguments)));
        }
    };
    Logger.debug = function (message) {
        var messages = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            messages[_i - 1] = arguments[_i];
        }
        if (Logger.level >= LogLevel.LLLL) {
            Logger.internalLog.apply(Logger, __spread(['debug'], Array.from(arguments)));
        }
    };
    Logger.getTimestamp = function () {
        var now = new Date();
        var units = [
            now.getHours(),
            now.getMinutes(),
            now.getSeconds()
        ]
            .map(function (unit) {
                return String_1.String.padLeft(unit.toString());
            });
        units.push(String_1.String.padLeft(now.getMilliseconds().toString(), 3));
        return units.join(':');
    };
    Logger.internalLog = function (type) {
        var messages = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            messages[_i - 1] = arguments[_i];
        }
        console[type === 'error' ? 'error' : 'log'].apply(console, __spread(['[' + this.getTimestamp() + ']', '[' + type.toUpperCase() + ']'], Array.from(arguments).slice(1)));
    };
    Logger.level = LogLevel.LLL;
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map