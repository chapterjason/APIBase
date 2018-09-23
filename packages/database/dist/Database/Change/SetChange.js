"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const AbstractChange_1 = require("./AbstractChange");
class SetChange extends AbstractChange_1.AbstractChange {
    constructor(path, value) {
        super(path);
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
exports.SetChange = SetChange;
//# sourceMappingURL=SetChange.js.map