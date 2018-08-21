"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base36 = /** @class */ (function () {
    function Base36() {
    }
    Base36.encode = function (string) {
        return Array.prototype.map.call(string, function (char) { return char.charCodeAt(0).toString(36); }).join('');
    };
    Base36.decode = function (string) {
        var chunked = [];
        for (var i = 0; i < string.length; i = i + 2) {
            chunked[i] = String.fromCharCode(parseInt(string[i] + string[i + 1], 36));
        }
        return chunked.join("");
    };
    return Base36;
}());
exports.Base36 = Base36;
//# sourceMappingURL=Base36.js.map