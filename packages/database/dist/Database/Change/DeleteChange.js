"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const AbstractChange_1 = require("./AbstractChange");
class DeleteChange extends AbstractChange_1.AbstractChange {
    constructor() {
        super(...arguments);
        this.type = 'delete';
    }
}
exports.DeleteChange = DeleteChange;
//# sourceMappingURL=DeleteChange.js.map