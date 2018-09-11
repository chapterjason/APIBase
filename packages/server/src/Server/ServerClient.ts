/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {DataStorage} from '@apibase/core';

export interface ServerClientOptions {
    socket: SocketIO.Socket;
}

export class ServerClient {

    protected options: ServerClientOptions;

    protected storage: DataStorage = new DataStorage();

    public constructor(options: ServerClientOptions) {
        this.options = options;

        const address = this.options.socket.handshake.address;
        if (typeof address === 'string') {
            this.storage.set('hostname', address);
        }
    }

    public on(event: string, listener: (...args: any[]) => void): this {
        this.options.socket.on(event, listener);
        return this;
    }

    public off(event: string, listener: (...args: any[]) => void): this {
        this.options.socket.off(event, listener);
        return this;
    }

    public once(event: string, listener: (...args: any[]) => void): this {
        this.options.socket.once(event, listener);
        return this;
    }

    public addListener(event: string, listener: (...args: any[]) => void): this {
        this.options.socket.addListener(event, listener);
        return this;
    }

    public removeListener(event: string, listener: (...args: any[]) => void): this {
        this.options.socket.removeListener(event, listener);
        return this;
    }

    public emit(event: string, ...args): this {
        this.options.socket.emit(event, ...args);
        return this;
    }

    public removeAllListeners(): this {
        this.options.socket.removeAllListeners();
        return this;
    }

    public getSocket() {
        return this.options.socket;
    }

    public getStorage() {
        return this.storage;
    }

    public getHostname(): string {
        return this.options.socket.id;
    }
}