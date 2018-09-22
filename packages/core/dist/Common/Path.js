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
class Path {
    constructor(path) {
        if (path instanceof Path) {
            this.segments = Path.normalize(path.getSegments());
        }
        else if (Array.isArray(path)) {
            this.segments = Path.normalize(path);
        }
        else if (typeof path === "string") {
            this.segments = Path.normalize(path);
        }
        else {
            this.segments = [];
        }
    }
    static ensurePath(path) {
        if (path instanceof Path) {
            return path;
        }
        else {
            return new Path(path);
        }
    }
    static normalize(segment) {
        if (typeof segment === "string") {
            segment = segment.split('/');
        }
        return segment
            .map(segment => segment.trim())
            .filter(segment => segment.length);
    }
    toString() {
        return '/' + this.segments.join('/');
    }
    getSegments() {
        return this.segments;
    }
    parent() {
        if (this.segments.length === 0) {
            return null;
        }
        else {
            return new Path(this.segments.slice(0, -1));
        }
    }
    child(segment) {
        return new Path(this.segments.concat(Path.normalize(segment)));
    }
    length() {
        return this.segments.length;
    }
    end() {
        if (this.segments.length === 0) {
            return null;
        }
        else {
            return this.segments[this.segments.length - 1];
        }
    }
}
exports.Path = Path;
//# sourceMappingURL=Path.js.map