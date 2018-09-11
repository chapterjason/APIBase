/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

export namespace String {

    export function padLeft(string: string, length: number = 2, char: string = '0') {
        const diff = length - string.length;
        if (diff > 0) {
            string = char.repeat(diff) + string;
        }

        return string;
    }

    export function padRight(string: string, length: number, char: string = '0') {
        const diff = length - string.length;
        if (diff > 0) {
            string += char.repeat(length);
        }

        return string;
    }

}