/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */


export class ResponseSuccess {

    protected success: boolean = true;
    protected data: any;

    public constructor(data: any) {
        this.data = data;
    }
}