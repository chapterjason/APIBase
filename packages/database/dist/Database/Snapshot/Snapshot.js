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
class Snapshot {
    constructor(reference, data) {
        this.reference = reference;
        this.data = data;
    }
    value() {
        return this.data;
    }
    key() {
        return this.reference.key();
    }
}
exports.Snapshot = Snapshot;
//# sourceMappingURL=Snapshot.js.map