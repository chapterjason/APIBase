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
var __1 = require("../..");
var core_1 = require("@apibase/core");
var Reference = /** @class */ (function () {
    function Reference(database, path) {
        this.database = database;
        this.path = path;
    }
    Reference.prototype.getPath = function () {
        return this.path;
    };
    Reference.prototype.key = function () {
        return this.path.end();
    };
    Reference.prototype.toJSON = function () {
        return {
            path: this.path.toString(),
            value: this.get().value()
        };
    };
    Reference.prototype.parent = function () {
        if (this.path.length() === 0) { // parent of root is null
            return null;
        }
        else if (this.path.length() === 1) { // parent
            return new Reference(this.database, new core_1.Path());
        }
        else {
            return new Reference(this.database, this.path.parent());
        }
    };
    Reference.prototype.reference = function (segment) {
        return new Reference(this.database, this.path.child(segment));
    };
    Reference.prototype.collection = function (segment) {
        return new __1.CollectionReference(this.database, this.path.child(segment));
    };
    Reference.prototype.set = function (value) {
        this.database.set(this.path, value);
        return this;
    };
    Reference.prototype.get = function () {
        return new __1.Snapshot(this, this.database.get(this.path));
    };
    Reference.prototype.delete = function () {
        this.database.delete(this.path);
        return this;
    };
    return Reference;
}());
exports.Reference = Reference;
//# sourceMappingURL=Reference.js.map