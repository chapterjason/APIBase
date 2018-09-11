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
Object.defineProperty(exports, "__esModule", { value: true });
function generateIdentifier() {
    var now = new Date();
    var random = Math.random();
    var parts = [
        now.getTime().toString(36),
        random.toString(36).substr(2, 9)
    ];
    return parts.join('');
}
exports.generateIdentifier = generateIdentifier;
//# sourceMappingURL=Identifier.js.map