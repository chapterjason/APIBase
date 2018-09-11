/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {ServerClient} from "./ServerClient";
import {Logger} from '@apibase/core';
import * as events from 'events';
import * as https from 'https';
import * as SocketIO from "socket.io";

export interface ServerOptions {
    port?: number;
    hostname?: string;
    webServer?: https.ServerOptions;
    server?: SocketIO.ServerOptions;
}

export class Server {

    protected server: SocketIO.Server;
    protected webServer: https.Server;

    protected options: ServerOptions;
    protected events: events.EventEmitter;
    protected clients: ServerClient[] = [];
    protected highlevelEvents: string[] = [
        'connecting',
        'connect',
        'disconnect'
    ];

    public constructor(options: ServerOptions) {
        this.options = options;

        this.events = new events.EventEmitter();
        this.webServer = https.createServer(this.options.webServer || {});
        this.webServer.listen(this.options.port || 7955, this.options.hostname || 'localhost', () => {
            Logger.info('Server listen on ' + this.getHostname());
        });

        this.server = SocketIO(this.webServer, this.options.server);
        this.server.on('connection', this.listener.bind(this));
    }

    public getServer() {
        return this.server;
    }

    public getWebServer() {
        return this.webServer;
    }

    public getHostname(): string {
        const address = this.webServer.address();
        if (typeof address === 'string') {
            return address;
        } else {
            return address.address + ':' + address.port;
        }
    }

    public hasClient(client: ServerClient): boolean {
        return this.clients.indexOf(client) > -1;
    }

    public addClient(client: ServerClient): this {
        if (!this.hasClient(client)) {
            this.clients.push(client);
        }

        return this;
    }

    public removeClient(client: ServerClient): this {
        client.removeAllListeners();

        const index: number = this.clients.indexOf(client);
        if (index > -1) {
            this.clients.splice(index, 1);
        }

        return this;
    }

    public on(event: string, listener: Function): this {
        this.events.on(event, listener as (...args: any[]) => void);

        // apply to all clients
        for (let client of this.clients) {
            client.on(event, (...args) => {
                listener(client, ...args);
            })
        }

        return this;
    }

    public emit(event: string, ...args: any[]): this {
        if (this.highlevelEvents.indexOf(event) > -1) {
            this.events.emit(event, ...args);
            return this;
        }

        this.server.sockets.emit(event, ...args);
        return this;
    }

    protected listener(socket: SocketIO.Socket): void {
        const client = new ServerClient({socket});
        client.on('disconnect', () => this.emit('disconnect', client));
        this.emit('connect', client);

        // reapply all before created events
        for (let eventName of this.events.eventNames()) {
            if (typeof eventName === 'string') {
                const listeners = this.events.listeners(eventName);
                for (let listener of listeners) {
                    client.on(eventName, (...args) => {
                        listener(client, ...args);
                    });
                }
            }
        }
    }

}