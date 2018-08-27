/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Server} from '@apibase/server';
import {Database} from '@apibase/database';

export declare function bindDatabaseEvents(server: Server, database: Database): void;
