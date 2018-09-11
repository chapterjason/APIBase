/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */


export class Path {

    protected segments: string[];

    public constructor();
    public constructor(segments: string[]);
    public constructor(path: string);
    public constructor(path: any = []) {
        if (Array.isArray(path)) {
            this.segments = Path.normalize(path);
        } else if (typeof path === "string") {
            this.segments = Path.normalize(path);
        } else {
            this.segments = [];
        }
    }

    protected static normalize(segments: string[]): string[]
    protected static normalize(segment: string): string[]
    protected static normalize(segment: any): string[] {
        if (typeof segment === "string") {
            segment = segment.split('/');
        }

        if (Array.isArray(segment)) {
            return segment
                .map(segment => segment.trim())
                .filter(segment => segment.length)
                ;
        }

        return [];
    }

    public toString() {
        return '/' + this.segments.join('/');
    }

    public getSegments() {
        return this.segments;
    }

    public parent(): Path | null {
        if (this.segments.length === 0) {
            return null;
        } else {
            return new Path(this.segments.slice(0, -1));
        }
    }

    public child(segment: string) {
        return new Path(this.segments.concat(Path.normalize(segment)));
    }

    public length() {
        return this.segments.length;
    }

    public end(): string | null {
        if (this.segments.length === 0) {
            return null;
        } else {
            return this.segments[this.segments.length - 1];
        }
    }

}