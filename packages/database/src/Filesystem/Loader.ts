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

export class Loader {

    protected file: string;

    public constructor(file: string) {
        this.file = file;
    }

    public load(database: Database) {
        if (!fs.existsSync(this.file)) {
            throw new Error('Database file "' + this.file + '" does not exist!');
        }

        let data = fs.readFileSync(this.file).toString();

        try {
            data = JSON.parse(data);
        } catch (error) {
            try {
                const decoded = Buffer.from(data, 'base64');
                const inflated = zlib.inflateSync(decoded);
                data = JSON.parse(inflated.toString());
            } catch (error) {
                throw new Error('Database file "' + this.file + '" does not contain any database compatible data!');
            }
        } finally {
            database.set('/', data);
        }
    }

}