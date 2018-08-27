/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

export class Base36 {

    public static encode(string: string) {
        return Array.prototype.map.call(string, char => char.charCodeAt(0).toString(36)).join('');
    }

    public static decode(string: string) {
        const chunked = [];
        for (let i = 0; i < string.length; i = i + 2) {
            chunked[i] = String.fromCharCode(parseInt(string[i] + string[i + 1], 36));
        }
        return chunked.join("");
    }
}