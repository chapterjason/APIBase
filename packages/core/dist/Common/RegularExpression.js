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
function escape(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
exports.escape = escape;
function match(string, regexp) {
    return !!regexp.exec(string);
}
exports.match = match;
function matchAll(string, regexp) {
    var matches = [];
    var currentMatch;
    if (!regexp.global) {
        throw new Error('Missing global flag!');
    }
    while ((currentMatch = regexp.exec(string)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        /* istanbul ignore next */
        if (currentMatch.index === regexp.lastIndex) {
            regexp.lastIndex++;
        }
        matches.push({
            index: currentMatch.index,
            input: currentMatch[0],
            groups: currentMatch.slice(1)
        });
    }
    return matches;
}
exports.matchAll = matchAll;
//# sourceMappingURL=RegularExpression.js.map