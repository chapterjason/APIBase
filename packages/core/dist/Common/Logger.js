"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const String_1 = require("./String");
/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["QUIET"] = 0] = "QUIET";
    LogLevel[LogLevel["L"] = 1] = "L";
    LogLevel[LogLevel["LL"] = 2] = "LL";
    LogLevel[LogLevel["LLL"] = 3] = "LLL";
    LogLevel[LogLevel["LLLL"] = 4] = "LLLL";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
class Logger {
    static setLogLevel(level) {
        Logger.level = level;
    }
    static error(message, ...messages) {
        if (Logger.level >= LogLevel.L) {
            Logger.internalLog('error', ...Array.from(arguments));
        }
    }
    static warn(message, ...messages) {
        if (Logger.level >= LogLevel.LL) {
            Logger.internalLog('warn', ...Array.from(arguments));
        }
    }
    static info(message, ...messages) {
        if (Logger.level >= LogLevel.LLL) {
            Logger.internalLog('info', ...Array.from(arguments));
        }
    }
    static log(message, ...messages) {
        if (Logger.level >= LogLevel.LLL) {
            Logger.internalLog('log', ...Array.from(arguments));
        }
    }
    static debug(message, ...messages) {
        if (Logger.level >= LogLevel.LLLL) {
            Logger.internalLog('debug', ...Array.from(arguments));
        }
    }
    static getTimestamp() {
        const now = new Date();
        let units = [
            now.getHours(),
            now.getMinutes(),
            now.getSeconds()
        ]
            .map(unit => String_1.padLeft(unit.toString()));
        units.push(String_1.padLeft(now.getMilliseconds().toString(), 3));
        return units.join(':');
    }
    static internalLog(type, ...messages) {
        console[type === 'error' ? 'error' : 'log']('[' + this.getTimestamp() + ']', '[' + type.toUpperCase() + ']', ...Array.from(arguments).slice(1));
    }
}
Logger.level = LogLevel.LLL;
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map