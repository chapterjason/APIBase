/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

export declare class Path {
    protected segments: string[];

    constructor();
    constructor(segments: string[]);
    constructor(path: string);

    protected static normalize(segments: string[]): string[];
    protected static normalize(segment: string): string[];

    toString(): string;

    getSegments(): string[];

    parent(): Path | null;

    child(segment: string): Path;

    length(): number;

    end(): string | null;
}
