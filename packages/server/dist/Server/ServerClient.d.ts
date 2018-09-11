/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

/// <reference types="socket.io" />
import {DataStorage} from '@apibase/core';
export interface ServerClientOptions {
    socket: SocketIO.Socket;
}
export declare class ServerClient {
    protected options: ServerClientOptions;
    protected storage: DataStorage;
    constructor(options: ServerClientOptions);
    on(event: string, listener: (...args: any[]) => void): this;
    off(event: string, listener: (...args: any[]) => void): this;
    once(event: string, listener: (...args: any[]) => void): this;
    addListener(event: string, listener: (...args: any[]) => void): this;
    removeListener(event: string, listener: (...args: any[]) => void): this;
    emit(event: string, ...args: any[]): this;
    removeAllListeners(): this;
    getSocket(): import("socket.io").Socket;
    getStorage(): DataStorage;
    getHostname(): string;
}
