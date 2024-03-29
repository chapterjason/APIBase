"use strict";
/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function padLeft(string, length = 2, char = '0') {
    const diff = length - string.length;
    if (diff > 0) {
        string = char.repeat(diff) + string;
    }
    return string;
}
exports.padLeft = padLeft;
function padRight(string, length = 2, char = '0') {
    const diff = length - string.length;
    if (diff > 0) {
        string += char.repeat(diff);
    }
    return string;
}
exports.padRight = padRight;
//# sourceMappingURL=String.js.map