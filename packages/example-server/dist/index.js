"use strict";
/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = {
        label: 0, sent: function () {
            if (t[0] & 1) throw t[1];
            return t[1];
        }, trys: [], ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;

    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {value: op[1], done: false};
                case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [6, e];
            y = 0;
        } finally {
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {value: op[0] ? op[1] : void 0, done: true};
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@apibase/core");
var Database_1 = require("./Database");
var express = require("express");
var cors = require("cors");
var ResponseError_1 = require("./Response/ResponseError");
var ResponseSuccess_1 = require("./Response/ResponseSuccess");
var database_1 = require("@apibase/database");
core_1.Logger.setLogLevel(core_1.LogLevel.LLLL);
var server = express();
// body will be parsed as json
server.use(express.json());
// response json as default
server.use(function (request, response, next) {
    response.header('Content-Type', 'application/json');
    next();
});
// set cors header
server.use(cors());
server.use(function (request, response, next) {
    return __awaiter(_this, void 0, void 0, function () {
        var path, data, error_1, changes, commits, i, change, error_2, i, _a, _b, _c, _d, _e, _f, error_3, _g, _h, _j,
            error_4;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    path = new core_1.Path(request.path);
                    if (!(request.method === 'GET')) return [3 /*break*/, 5];
                    core_1.Logger.info('GET', path.toString());
                    _k.label = 1;
                case 1:
                    _k.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Database_1.database.get(path)];
                case 2:
                    data = _k.sent();
                    response.send(new ResponseSuccess_1.ResponseSuccess(data));
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _k.sent();
                    response.status(500);
                    response.send(new ResponseError_1.ResponseError(error_1.message));
                    return [3 /*break*/, 4];
                case 4:
                    return [3 /*break*/, 29];
                case 5:
                    if (!(request.method === 'POST')) return [3 /*break*/, 20];
                    core_1.Logger.info('SYNC', path.toString());
                    changes = request.body;
                    commits = [];
                    _k.label = 6;
                case 6:
                    _k.trys.push([6, 14, 15, 16]);
                    i = 0;
                    _k.label = 7;
                case 7:
                    if (!(i < changes.length)) return [3 /*break*/, 13];
                    change = changes[i];
                    if (!(change.type === database_1.ChangeType.SET)) return [3 /*break*/, 9];
                    return [4 /*yield*/, Database_1.database.set(change.path, change.value)];
                case 8:
                    _k.sent();
                    return [3 /*break*/, 11];
                case 9:
                    if (!(change.type === database_1.ChangeType.DELETE)) return [3 /*break*/, 11];
                    return [4 /*yield*/, Database_1.database.delete(change.path)];
                case 10:
                    _k.sent();
                    _k.label = 11;
                case 11:
                    commits.push(i);
                    _k.label = 12;
                case 12:
                    i++;
                    return [3 /*break*/, 7];
                case 13:
                    return [3 /*break*/, 16];
                case 14:
                    error_2 = _k.sent();
                    core_1.Logger.error(error_2);
                    return [3 /*break*/, 16];
                case 15:
                    for (i = commits.length - 1; i >= 0; i--) {
                        changes.splice(commits[i], 1);
                    }
                    return [7 /*endfinally*/];
                case 16:
                    if (!(changes.length > 0)) return [3 /*break*/, 17];
                    response.send(new ResponseError_1.ResponseError(changes));
                    return [3 /*break*/, 19];
                case 17:
                    _b = (_a = response).send;
                    _c = ResponseSuccess_1.ResponseSuccess.bind;
                    return [4 /*yield*/, Database_1.database.get('/')];
                case 18:
                    _b.apply(_a, [new (_c.apply(ResponseSuccess_1.ResponseSuccess, [void 0, _k.sent()]))()]);
                    _k.label = 19;
                case 19:
                    return [3 /*break*/, 29];
                case 20:
                    if (!(request.method === 'PUT')) return [3 /*break*/, 25];
                    core_1.Logger.info('SET', path.toString());
                    _k.label = 21;
                case 21:
                    _k.trys.push([21, 23, , 24]);
                    _e = (_d = response).send;
                    _f = ResponseSuccess_1.ResponseSuccess.bind;
                    return [4 /*yield*/, Database_1.database.set(path, request.body)];
                case 22:
                    _e.apply(_d, [new (_f.apply(ResponseSuccess_1.ResponseSuccess, [void 0, _k.sent()]))()]);
                    return [3 /*break*/, 24];
                case 23:
                    error_3 = _k.sent();
                    response.status(500);
                    response.send(new ResponseError_1.ResponseError(error_3.message));
                    return [3 /*break*/, 24];
                case 24:
                    return [3 /*break*/, 29];
                case 25:
                    if (!(request.method === 'DELETE')) return [3 /*break*/, 29];
                    core_1.Logger.info('DELETE', path.toString());
                    _k.label = 26;
                case 26:
                    _k.trys.push([26, 28, , 29]);
                    _h = (_g = response).send;
                    _j = ResponseSuccess_1.ResponseSuccess.bind;
                    return [4 /*yield*/, Database_1.database.delete(path)];
                case 27:
                    _h.apply(_g, [new (_j.apply(ResponseSuccess_1.ResponseSuccess, [void 0, _k.sent()]))()]);
                    return [3 /*break*/, 29];
                case 28:
                    error_4 = _k.sent();
                    response.status(500);
                    response.send(new ResponseError_1.ResponseError(error_4.message));
                    return [3 /*break*/, 29];
                case 29:
                    return [4 /*yield*/, Database_1.save()];
                case 30:
                    _k.sent();
                    return [2 /*return*/];
        }
        });
    });
});
server.all('*', function (request, response) {
});
server.listen(3000, function () { return console.log('Example-server listening on port 3000!'); });
//# sourceMappingURL=index.js.map