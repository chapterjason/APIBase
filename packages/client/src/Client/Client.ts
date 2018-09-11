/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import * as SocketIOClient from 'socket.io-client';

export interface ClientOptions {
    uri: string;
    client: SocketIOClient.ConnectOpts;
}

export class Client {

    protected options: ClientOptions;

    protected socket: SocketIOClient.Socket;

    public constructor(options: ClientOptions) {
        this.options = options;

        this.socket = SocketIOClient.connect(this.options.uri, this.options.client);
    }

    public on(event: string, listener: (...args: any[]) => void): this {
        this.socket.on(event, listener);
        return this;
    }

    public off(event: string, listener: (...args: any[]) => void): this {
        this.socket.off(event, listener);
        return this;
    }

    public once(event: string, listener: (...args: any[]) => void): this {
        this.socket.once(event, listener);
        return this;
    }

    public addListener(event: string, listener: (...args: any[]) => void): this {
        this.socket.addEventListener(event, listener);
        return this;
    }

    public removeListener(event: string, listener: (...args: any[]) => void): this {
        this.socket.removeListener(event, listener);
        return this;
    }

    public emit(event: string, ...args): this {
        this.socket.emit(event, ...args);
        return this;
    }

    public removeAllListeners(): this {
        this.socket.removeAllListeners();
        return this;
    }

    public getSocket() {
        return this.socket;
    }
}