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
var fs = require("fs");
var zlib = require("zlib");
var Saver = /** @class */ (function () {
    function Saver(file) {
        this.file = file;
    }

    Saver.prototype.save = function (database, encoded) {
        if (encoded === void 0) {
            encoded = true;
        }
        var data = JSON.stringify(database.get('/'));
        if (encoded) {
            data = zlib.deflateSync(data, {memLevel: 9, level: 9}).toString('base64');
        }
        fs.writeFileSync(this.file, data);
    };
    return Saver;
}());
exports.Saver = Saver;
//# sourceMappingURL=Saver.js.map