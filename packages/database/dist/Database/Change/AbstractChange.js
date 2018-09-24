"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const core_1 = require("@apibase/core");
class AbstractChange {
    constructor(path) {
        this.type = undefined;
        this.path = core_1.Path.ensurePath(path);
        this.timestamp = new Date();
    }
    getPath() {
        return this.path;
    }
    getTimestamp() {
        return this.timestamp;
    }

    getType() {
        return this.type;
    }
}
exports.AbstractChange = AbstractChange;
//# sourceMappingURL=AbstractChange.js.map