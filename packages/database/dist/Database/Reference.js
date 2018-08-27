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
var Utils_1 = require("../Common/Utils");
var Reference = /** @class */ (function () {
    function Reference(database, path) {
        this.database = database;
        this.path = path;
    }

    Reference.prototype.key = function () {
        return Utils_1.basename(this.path);
    };
    Reference.prototype.toObject = function () {
        return {path: this.path, value: this.get()};
    };
    Reference.prototype.parent = function () {
        return new Reference(this.database, Utils_1.parentPath(this.path));
    };
    Reference.prototype.child = function (childPath) {
        return new Reference(this.database, this.path + Utils_1.normalizeAsString(childPath));
    };
    Reference.prototype.set = function (value) {
        this.database.set(this.path, value);
    };
    Reference.prototype.get = function () {
        return this.database.get(this.path);
    };
    Reference.prototype.push = function (value) {
        var childPath = this.database.push(this.path, value || null);
        return new Reference(this.database, childPath);
    };
    Reference.prototype.delete = function () {
        this.database.delete(this.path);
    };
    return Reference;
}());
exports.Reference = Reference;
//# sourceMappingURL=Reference.js.map