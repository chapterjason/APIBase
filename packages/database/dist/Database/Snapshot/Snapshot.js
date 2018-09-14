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
var Snapshot = /** @class */ (function () {
    function Snapshot(reference, data) {
        this.reference = reference;
        this.data = data;
    }
    Snapshot.prototype.value = function () {
        return this.data;
    };
    Snapshot.prototype.key = function () {
        return this.reference.key();
    };
    return Snapshot;
}());
exports.Snapshot = Snapshot;
//# sourceMappingURL=Snapshot.js.map