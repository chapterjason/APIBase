/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Logger} from '@apibase/core';
import {Server, ServerClient} from '@apibase/server';
import {Database} from '@apibase/database';

export function bindDatabaseEvents(server: Server, database: Database) {

    server.on('database-set', (client: ServerClient, path: string, value: any, fn) => {
        Logger.debug('database-set', client.getHostname(), path);
        try {
            database.set(path, value);
            fn({success: true});
        } catch (error) {
            Logger.debug('database-set', client.getHostname(), error.message);
            fn({success: false, error: error.message});
        }
    });

    server.on('database-get', (client: ServerClient, path: string, fn) => {
        Logger.debug('database-get', client.getHostname(), path);
        try {
            const result: any = database.get(path);
            Logger.debug('database-get', client.getHostname(), result);
            fn({success: true, result});
        } catch (error) {
            Logger.debug('database-get', client.getHostname(), error.message);
            fn({success: false, error: error.message});
        }
    });

    server.on('database-push', (client: ServerClient, path: string, value: any, fn) => {
        Logger.debug('database-push', client.getHostname(), path);
        try {
            const result: string = database.push(path, value);
            fn({success: true, result});
        } catch (error) {
            Logger.debug('database-push', client.getHostname(), error.message);
            fn({success: false, error: error.message});
        }
    });

    server.on('database-delete', (client: ServerClient, path: string, fn) => {
        Logger.debug('database-delete', client.getHostname(), path);
        try {
            const result: boolean = database.delete(path);
            fn({success: result});
        } catch (error) {
            Logger.debug('database-delete', client.getHostname(), error.message);
            fn({success: false, error: error.message});
        }
    });

}