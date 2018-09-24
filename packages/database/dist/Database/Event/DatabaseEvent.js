"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const core_1 = require("@apibase/core");

class DatabaseEvent extends core_1.Event {
    constructor(type, change) {
        super(type);
        this.change = change;
    }

    getChange() {
        return this.change;
    }
}

exports.DatabaseEvent = DatabaseEvent;
//# sourceMappingURL=DatabaseEvent.js.map