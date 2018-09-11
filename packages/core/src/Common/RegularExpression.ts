/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

export namespace RegularExpression {

    export function escape(string: string) {
        return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    export function match(string: string, regexp: RegExp) {
        return regexp.exec(string);
    }

    export function matchAll(string: string, regexp: RegExp) {
        const matches = [];
        let currentMatch;

        while ((currentMatch = regexp.exec(string)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (currentMatch.index === regexp.lastIndex) {
                regexp.lastIndex++;
            }

            const index = currentMatch.index;
            const input = currentMatch[0];

            const match = currentMatch.slice(1);
            match.index = index;
            match.input = input;

            matches.push(match);
        }

        return matches;
    }

}