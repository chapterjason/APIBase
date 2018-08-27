/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

/// <reference types="node" />
import {ServerClient} from "./ServerClient";
import * as events from 'events';
import * as https from 'https';
import * as SocketIO from "socket.io";

export interface ServerOptions {
    port?: number;
    hostname?: string;
    webServer?: https.ServerOptions;
    server?: SocketIO.ServerOptions;
}

export declare class Server {
    protected server: SocketIO.Server;
    protected webServer: https.Server;
    protected options: ServerOptions;
    protected events: events.EventEmitter;
    protected clients: ServerClient[];
    protected highlevelEvents: string[];

    constructor(options: ServerOptions);

    getServer(): SocketIO.Server;

    getWebServer(): https.Server;

    getHostname(): string;

    hasClient(client: ServerClient): boolean;

    addClient(client: ServerClient): this;

    removeClient(client: ServerClient): this;

    on(event: string, listener: Function): this;

    emit(event: string, ...args: any[]): this;

    protected listener(socket: SocketIO.Socket): void;
}
