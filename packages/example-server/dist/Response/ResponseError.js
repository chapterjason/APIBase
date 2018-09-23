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

class ResponseError {
    constructor(result) {
        this.success = false;
        this.result = result;
    }
}
exports.ResponseError = ResponseError;
//# sourceMappingURL=ResponseError.js.map