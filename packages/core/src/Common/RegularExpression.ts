/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

export function escape(string: string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export function match(string: string, regexp: RegExp) {
    return !!regexp.exec(string);
}

export interface Match {
    index: number;
    input: string;
    groups: string[];
}

export function matchAll(string: string, regexp: RegExp) {
    const matches = [];
    let currentMatch;

    if (!regexp.global) {
        throw new Error('Missing global flag!');
    }

    while ((currentMatch = regexp.exec(string)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
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