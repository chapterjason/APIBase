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

/**
 * Returns the createTimestamp from the id
 *
 * @param id
 */
function createdAt(id) {
    return new Date(parseInt(id.substring(0, 8), 16) * 1000);
}

exports.createdAt = createdAt;

/**
 * Generates a unique id
 *
 * @returns string
 */
function generateIdentifier() {
    var now = new Date();
    // Math.random should be unique because of its seeding algorithm.
    var random = Math.random();
    var parts = [
        // Add the date like in mongodb to have a created timestamp
        Math.floor(now.getTime() / 1000).toString(16),
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters after the decimal.
        random.toString(36).substr(2, 9)
    ];
    return parts.join('');
}
exports.generateIdentifier = generateIdentifier;
//# sourceMappingURL=Identifier.js.map