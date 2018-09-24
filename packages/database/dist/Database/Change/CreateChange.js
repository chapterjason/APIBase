"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const AbstractChange_1 = require("./AbstractChange");

class CreateChange extends AbstractChange_1.AbstractChange {
    constructor(path, value) {
        super(path);
        this.type = 'create';
        this.value = value;
    }

    getValue() {
        return this.value;
    }
}

exports.CreateChange = CreateChange;
//# sourceMappingURL=CreateChange.js.map