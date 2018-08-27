/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {Database} from "../Database/Database";

export declare class Loader {
    protected file: string;

    constructor(file: string);

    load(database: Database): void;
}
