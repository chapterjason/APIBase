"use strict";
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