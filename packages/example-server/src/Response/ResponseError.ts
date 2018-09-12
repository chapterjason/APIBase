/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */


export class ResponseError {

    protected success: boolean = false;
    protected result: any;

    public constructor(result: any) {
        this.result = result;
    }
}