/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

/// <reference types="socket.io-client" />
export interface ClientOptions {
    uri: string;
    client: SocketIOClient.ConnectOpts;
}
export declare class Client {
    protected options: ClientOptions;
    protected socket: SocketIOClient.Socket;
    constructor(options: ClientOptions);
    on(event: string, listener: (...args: any[]) => void): this;
    off(event: string, listener: (...args: any[]) => void): this;
    once(event: string, listener: (...args: any[]) => void): this;
    addListener(event: string, listener: (...args: any[]) => void): this;
    removeListener(event: string, listener: (...args: any[]) => void): this;
    emit(event: string, ...args: any[]): this;
    removeAllListeners(): this;
    getSocket(): SocketIOClient.Socket;
}
