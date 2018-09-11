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
var Database_1 = require("../Database");
var Snapshot = /** @class */ (function () {
    function Snapshot(reference, data) {
        this.reference = reference;
        this.database = new Database_1.Database(data);
    }

    Snapshot.prototype.value = function () {
        return this.database.get();
    };
    Snapshot.prototype.key = function () {
        return this.reference.key();
    };
    return Snapshot;
}());
exports.Snapshot = Snapshot;
//# sourceMappingURL=Snapshot.js.map