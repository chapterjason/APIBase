"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Path_1 = require("./Path");
function isObject(object) {
    return !Array.isArray(object) && object !== null && typeof object === "object";
}
exports.isObject = isObject;

function walkDeep(object, callback) {
    if (isObject(object)) {
        const keys = Object.keys(object);
        for (let key of keys) {
            const value = object[key];
            callback(new Path_1.Path(key), value);
            walkDeep(value, (path, value) => {
                callback(new Path_1.Path([key, path.toString()]), value);
            });
        }
    }
}

exports.walkDeep = walkDeep;
//# sourceMappingURL=Object.js.map