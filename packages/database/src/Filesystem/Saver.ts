/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Database} from "../Database/Database";
import * as fs from 'fs';
import * as zlib from 'zlib';

export class Saver {

    protected file: string;

    public constructor(file: string) {
        this.file = file;
    }

    public save(database: Database, encoded: boolean = true) {
        let data = JSON.stringify(database.get('/'));

        if (encoded) {
            data = zlib.deflateSync(data, {memLevel: 9, level: 9}).toString('base64');
        }

        fs.writeFileSync(this.file, data);
    }

}