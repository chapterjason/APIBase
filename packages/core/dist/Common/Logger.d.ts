/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

export declare enum LogLevel {
    QUIET = 0,
    L = 1,
    LL = 2,
    LLL = 3,
    LLLL = 4
}
export declare class Logger {
    protected static level: LogLevel;
    static setLogLevel(level: LogLevel): void;
    static error(message: any, ...messages: any[]): void;
    static warn(message: any, ...messages: any[]): void;
    static info(message: any, ...messages: any[]): void;
    static log(message: any, ...messages: any[]): void;
    static debug(message: any, ...messages: any[]): void;
    protected static getTimestamp(): string;
    protected static internalLog(type: string, ...messages: any[]): void;
}
