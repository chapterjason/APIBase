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
var DataStorage = /** @class */ (function () {
    function DataStorage(data) {
        if (data === void 0) {
            data = {};
        }
        this.data = data;
    }

    DataStorage.prototype.has = function (key) {
        return key in this.data;
    };
    DataStorage.prototype.set = function (key, value) {
        this.data[key] = value;
        return this;
    };
    DataStorage.prototype.get = function (key) {
        if (this.has(key)) {
            return this.data[key];
        }
        return null;
    };
    return DataStorage;
}());
exports.DataStorage = DataStorage;
//# sourceMappingURL=DataStorage.js.map