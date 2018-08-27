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
var Loader = /** @class */ (function () {
    function Loader(file) {
        this.file = file;
    }

    Loader.prototype.load = function (database) {
        if (!fs.existsSync(this.file)) {
            throw new Error('Database file "' + this.file + '" does not exist!');
        }
        var data = fs.readFileSync(this.file).toString();
        try {
            data = JSON.parse(data);
        }
        catch (error) {
            try {
                var decoded = Buffer.from(data, 'base64');
                var inflated = zlib.inflateSync(decoded);
                data = JSON.parse(inflated.toString());
            }
            catch (error) {
                throw new Error('Database file "' + this.file + '" does not contain any database compatible data!');
            }
        }
        finally {
            database.set('/', data);
        }
    };
    return Loader;
}());
exports.Loader = Loader;
//# sourceMappingURL=Loader.js.map