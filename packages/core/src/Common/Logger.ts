/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {String} from "./String";

export enum LogLevel {
    QUIET,
    L,
    LL,
    LLL,
    LLLL
}

export class Logger {

    protected static level = LogLevel.LLL;

    public static setLogLevel(level: LogLevel) {
        Logger.level = level;
    }

    public static error(message: any, ...messages) {
        if (Logger.level >= LogLevel.L) {
            Logger.internalLog('error', ...Array.from(arguments));
        }
    }

    public static warn(message: any, ...messages) {
        if (Logger.level >= LogLevel.LL) {
            Logger.internalLog('warn', ...Array.from(arguments));
        }
    }

    public static info(message: any, ...messages) {
        if (Logger.level >= LogLevel.LLL) {
            Logger.internalLog('info', ...Array.from(arguments));
        }
    }

    public static log(message: any, ...messages) {
        if (Logger.level >= LogLevel.LLL) {
            Logger.internalLog('log', ...Array.from(arguments));
        }
    }

    public static debug(message: any, ...messages) {
        if (Logger.level >= LogLevel.LLLL) {
            Logger.internalLog('debug', ...Array.from(arguments));
        }
    }

    protected static getTimestamp() {
        const now = new Date();
        let units = [
            now.getHours(),
            now.getMinutes(),
            now.getSeconds()
        ]
            .map(unit => String.padLeft(unit.toString()));

        units.push(String.padLeft(now.getMilliseconds().toString(), 3));

        return units.join(':');
    }

    protected static internalLog(type: string, ...messages) {
        console[type === 'error' ? 'error' : 'log']('[' + this.getTimestamp() + ']', '[' + type.toUpperCase() + ']', ...Array.from(arguments).slice(1));
    }
}