
/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

export function generateIdentifier() {
    const now: Date = new Date();
    const random: number = Math.random();

    const parts: string[] = [
        now.getTime().toString(36),
        random.toString(36).substr(2, 9)
    ];

    return parts.join('');
}