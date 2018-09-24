/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import {escape, getKeys, matchAll} from "./RegularExpression";
import {Map, MapTupel} from "..";

export type PathType = Path | string | string[];

export class Path {

    protected segments: string[];

    public constructor(path?: PathType) {
        if (path instanceof Path) {
            this.segments = Path.normalize(path.getSegments());
        } else if (Array.isArray(path)) {
            this.segments = Path.normalize(path);
        } else if (typeof path === "string") {
            this.segments = Path.normalize(path);
        } else {
            this.segments = [];
        }
    }

    public static ensurePath(path: PathType) {
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

        segment = ([] as string[]).concat(...segment.map(item => item.split('/')));

        return segment
            .filter(segment => (segment || '').toString().length)
            .map(segment => segment.trim())
            .filter(segment => segment.length);
    }

    public startsWith(path: PathType): Map<string, string> | false {
        path = Path.ensurePath(path);
        const keys = getKeys(path.toString());
        const regexp = new RegExp(escape(path.toString()).replace(/\\{(\w+)\\}/g, '(\\w+)'), 'g');
        const matches = matchAll(this.toString(), regexp);

        if (matches.length === 1) {
            const groups = matches.shift().groups;
            return new Map<string, string>(keys.map((key, index) => [key, groups[index]]) as Array<MapTupel<string, string>>);
        } else {
            return false;
        }
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