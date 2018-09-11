/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

"use strict";
/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */
Object.defineProperty(exports, "__esModule", {value: true});
var String;
(function (String) {
    function padLeft(string, length, char) {
        if (length === void 0) {
            length = 2;
        }
        if (char === void 0) {
            char = '0';
        }
        var diff = length - string.length;
        if (diff > 0) {
            string = char.repeat(diff) + string;
        }
        return string;
    }

    String.padLeft = padLeft;

    function padRight(string, length, char) {
        if (char === void 0) {
            char = '0';
        }
        var diff = length - string.length;
        if (diff > 0) {
            string += char.repeat(length);
        }
        return string;
    }

    String.padRight = padRight;
})(String = exports.String || (exports.String = {}));
//# sourceMappingURL=String.js.map