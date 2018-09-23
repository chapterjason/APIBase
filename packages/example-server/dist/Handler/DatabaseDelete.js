"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }

        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }

        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {value: true});
const ResponseSuccess_1 = require("../Response/ResponseSuccess");
const ResponseError_1 = require("../Response/ResponseError");
const core_1 = require("@apibase/core");
function DatabaseDelete(database, save) {
    return (request, response, next) => __awaiter(this, void 0, void 0, function* () {
        if (request.method === 'DELETE') {
            const path = new core_1.Path(request.path);
            core_1.Logger.info('DELETE', path.toString());
            try {
                response.send(new ResponseSuccess_1.ResponseSuccess(yield database.delete(path)));
                yield save();
            }
            catch (error) {
                response.status(500);
                response.send(new ResponseError_1.ResponseError(error.message));
            }
        }
        else {
            next();
        }
    });
}
exports.DatabaseDelete = DatabaseDelete;
//# sourceMappingURL=DatabaseDelete.js.map