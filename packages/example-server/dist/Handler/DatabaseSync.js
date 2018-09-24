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
const core_1 = require("@apibase/core");
const ResponseSuccess_1 = require("../Response/ResponseSuccess");
const ResponseError_1 = require("../Response/ResponseError");
const Database_1 = require("../Database");
function DatabaseSync(database, save) {
    return (request, response, next) => __awaiter(this, void 0, void 0, function* () {
        if (request.method === 'POST') {
            const path = new core_1.Path(request.path);
            core_1.Logger.info('SYNC', path.toString());
            try {
                if (Array.isArray(request.body)) {
                    const items = Database_1.convertToTupelArray(request.body);
                    const changes = new core_1.Map(items);
                    changes.forEach(data => {
                        core_1.Logger.debug('SYNC', data.getTimestamp(), data['type'], data.getPath());
                    });
                    yield database.applyChanges(changes);
                }
                response.send(new ResponseSuccess_1.ResponseSuccess(yield database.get('/')));
                yield save();
            }
            catch (error) {
                response.status(500);
                response.send(new ResponseError_1.ResponseError(error));
            }
        }
        else {
            next();
        }
    });
}
exports.DatabaseSync = DatabaseSync;
//# sourceMappingURL=DatabaseSync.js.map