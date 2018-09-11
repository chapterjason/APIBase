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
var RegularExpression;
(function (RegularExpression) {
    function escape(string) {
        return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    RegularExpression.escape = escape;

    function match(string, regexp) {
        return regexp.exec(string);
    }

    RegularExpression.match = match;

    function matchAll(string, regexp) {
        var matches = [];
        var currentMatch;
        while ((currentMatch = regexp.exec(string)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (currentMatch.index === regexp.lastIndex) {
                regexp.lastIndex++;
            }
            var index = currentMatch.index;
            var input = currentMatch[0];
            var match_1 = currentMatch.slice(1);
            match_1.index = index;
            match_1.input = input;
            matches.push(match_1);
        }
        return matches;
    }

    RegularExpression.matchAll = matchAll;
})(RegularExpression = exports.RegularExpression || (exports.RegularExpression = {}));
//# sourceMappingURL=RegularExpression.js.map