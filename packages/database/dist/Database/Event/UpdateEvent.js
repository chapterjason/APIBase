"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const DatabaseEvent_1 = require("./DatabaseEvent");

class UpdateEvent extends DatabaseEvent_1.DatabaseEvent {
    constructor(change) {
        super('update', change);
    }
}

exports.UpdateEvent = UpdateEvent;
//# sourceMappingURL=UpdateEvent.js.map