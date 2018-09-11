/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

export declare class ResponseError {
    protected success: boolean;
    protected errorMessage: string;

    constructor(message: string);
}
