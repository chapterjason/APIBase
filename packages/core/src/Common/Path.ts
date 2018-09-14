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

    public constructor(path: string | string[] = []) {
        if (Array.isArray(path)) {
            this.segments = Path.normalize(path);
        } else if (typeof path === "string") {
            this.segments = Path.normalize(path);
        } else {
            this.segments = [];
        }
    }

    public static ensurePath(path: Path | string | string[]) {
        if (path instanceof Path) {
            return path;
        } else {
            return new Path(path);
        }
    }

    protected static normalize(segment: string | string[]): string[] {
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