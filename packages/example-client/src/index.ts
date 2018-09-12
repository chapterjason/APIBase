/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {createdAt, Logger, LogLevel} from '@apibase/core';
import Axios from "axios";
import {Database} from "@apibase/database";

Logger.setLogLevel(LogLevel.LLLL);

Logger.debug('Init');

const baseUrl = 'http://localhost:3000/';

const database = new Database();

Axios.get(baseUrl)
    .then((response) => {
        database.set('/', response.data.result);

        const reference = database.collection<{ name: string }>('/users');
        const users = reference.get();

        users.forEach((user) => {
            const id = user.key();
            Logger.debug(createdAt(id), id, user.value());
        });
    });
