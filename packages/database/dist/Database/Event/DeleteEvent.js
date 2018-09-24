"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const DatabaseEvent_1 = require("./DatabaseEvent");

class DeleteEvent extends DatabaseEvent_1.DatabaseEvent {
    constructor(change) {
        super('delete', change);
    }
}

exports.DeleteEvent = DeleteEvent;
//# sourceMappingURL=DeleteEvent.js.map