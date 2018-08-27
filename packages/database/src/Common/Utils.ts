/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

export function normalize(path: string): string[] {
    return path
        .split('/')
        .map(part => part.trim())
        .filter(part => part.length);
}

export function normalizeAsString(path: string): string {
    return '/' + normalize(path).join('/');
}

export function basename(path: string): string {
    return normalize(path).pop();
}

export function parentPath(path: string) {
    const parts = normalize(path);
    parts.pop();
    return '/' + parts.join('/');
}