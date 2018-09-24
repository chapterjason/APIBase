"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const DatabaseEvent_1 = require("./DatabaseEvent");

class CreateEvent extends DatabaseEvent_1.DatabaseEvent {
    constructor(change) {
        super('create', change);
    }
}

exports.CreateEvent = CreateEvent;
//# sourceMappingURL=CreateEvent.js.map