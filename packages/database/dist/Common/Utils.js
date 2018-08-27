/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

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

function normalize(path) {
    return path
        .split('/')
        .map(function (part) {
            return part.trim();
        })
        .filter(function (part) {
            return part.length;
        });
}

exports.normalize = normalize;

function normalizeAsString(path) {
    return '/' + normalize(path).join('/');
}

exports.normalizeAsString = normalizeAsString;

function basename(path) {
    return normalize(path).pop();
}

exports.basename = basename;

function parentPath(path) {
    var parts = normalize(path);
    parts.pop();
    return '/' + parts.join('/');
}

exports.parentPath = parentPath;
//# sourceMappingURL=Utils.js.map