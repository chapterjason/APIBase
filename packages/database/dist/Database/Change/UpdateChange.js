"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const AbstractChange_1 = require("./AbstractChange");

class UpdateChange extends AbstractChange_1.AbstractChange {
    constructor(path, before, value) {
        super(path);
        this.type = 'update';
        this.before = before;
        this.value = value;
    }

    getBefore() {
        return this.before;
    }

    getValue() {
        return this.value;
    }
}

exports.UpdateChange = UpdateChange;
//# sourceMappingURL=UpdateChange.js.map