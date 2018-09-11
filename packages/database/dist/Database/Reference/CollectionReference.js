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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array && function (d, b) {
                d.__proto__ = b;
            }) ||
            function (d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", {value: true});
var Reference_1 = require("./Reference");
var core_1 = require("@apibase/core");
var __1 = require("../..");
var CollectionReference = /** @class */ (function (_super) {
    __extends(CollectionReference, _super);

    function CollectionReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }

    CollectionReference.prototype.push = function (value) {
        var id = core_1.generateIdentifier();
        var reference = new Reference_1.Reference(this.database, this.path.child(id));
        if (typeof value !== "undefined") {
            reference.set(value);
        }
        return reference;
    };
    CollectionReference.prototype.get = function () {
        return new __1.CollectionSnapshot(this, this.database.get(this.path));
    };
    return CollectionReference;
}(Reference_1.Reference));
exports.CollectionReference = CollectionReference;
//# sourceMappingURL=CollectionReference.js.map