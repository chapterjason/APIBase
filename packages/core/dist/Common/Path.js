"use strict";
/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */
Object.defineProperty(exports, "__esModule", {value: true});
var Path = /** @class */ (function () {
    function Path(path) {
        if (path === void 0) {
            path = [];
        }
        if (Array.isArray(path)) {
            this.segments = Path.normalize(path);
        }
        else if (typeof path === "string") {
            this.segments = Path.normalize(path);
        }
        else {
            this.segments = [];
        }
    }

    Path.ensurePath = function (path) {
        if (path instanceof Path) {
            return path;
        }
        else {
            return new Path(path);
        }
    };
    Path.normalize = function (segment) {
        if (typeof segment === "string") {
            segment = segment.split('/');
        }
        if (Array.isArray(segment)) {
            return segment
                .map(function (segment) {
                    return segment.trim();
                })
                .filter(function (segment) {
                    return segment.length;
                });
        }
        return [];
    };
    Path.prototype.toString = function () {
        return '/' + this.segments.join('/');
    };
    Path.prototype.getSegments = function () {
        return this.segments;
    };
    Path.prototype.parent = function () {
        if (this.segments.length === 0) {
            return null;
        }
        else {
            return new Path(this.segments.slice(0, -1));
        }
    };
    Path.prototype.child = function (segment) {
        return new Path(this.segments.concat(Path.normalize(segment)));
    };
    Path.prototype.length = function () {
        return this.segments.length;
    };
    Path.prototype.end = function () {
        if (this.segments.length === 0) {
            return null;
        }
        else {
            return this.segments[this.segments.length - 1];
        }
    };
    return Path;
}());
exports.Path = Path;
//# sourceMappingURL=Path.js.map