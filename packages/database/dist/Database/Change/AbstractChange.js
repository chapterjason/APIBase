"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const core_1 = require("@apibase/core");

class AbstractChange {
    constructor(path) {
        this.path = core_1.Path.ensurePath(path);
        this.timestamp = new Date();
    }

    getPath() {
        return this.path;
    }

    getTimestamp() {
        return this.timestamp;
    }
}

exports.AbstractChange = AbstractChange;
//# sourceMappingURL=AbstractChange.js.map