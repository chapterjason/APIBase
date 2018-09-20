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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@apibase/core");
var Reference_1 = require("./Reference/Reference");
var CollectionReference_1 = require("./Reference/CollectionReference");
var Database = /** @class */ (function () {
    function Database(mapping) {
        if (mapping === void 0) { mapping = {}; }
        this.depthLimit = 32;
        this.mapping = mapping;
    }
    Database.prototype.delete = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var segments, current, lastIndex, currentPath, itemIndex, segment;
            return __generator(this, function (_a) {
                path = core_1.Path.ensurePath(path);
                if (path.length() === 0) {
                    this.mapping = {};
                    return [2 /*return*/, true];
                }
                else {
                    segments = path.getSegments();
                    current = this.mapping;
                    lastIndex = segments.length - 1;
                    currentPath = new core_1.Path();
                    itemIndex = 0;
                    for (; itemIndex < segments.length; itemIndex++) {
                        segment = segments[itemIndex];
                        if (segment in current) {
                            currentPath.child(segment);
                            if (itemIndex === lastIndex) {
                                delete current[segment];
                                return [2 /*return*/, true];
                            }
                            current = current[segment];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    Database.prototype.set = function (path, value) {
        return __awaiter(this, void 0, void 0, function () {
            var segments, current, depth, segmentIndex, segment;
            return __generator(this, function (_a) {
                path = core_1.Path.ensurePath(path);
                if (path.length() === 0) {
                    this.mapping = value;
                    return [2 /*return*/, true];
                }
                else {
                    segments = path.getSegments();
                    current = this.mapping;
                    depth = 1;
                    for (segmentIndex = 0; segmentIndex < segments.length; segmentIndex++) {
                        segment = segments[segmentIndex];
                        depth++;
                        if (depth >= this.depthLimit) {
                            throw new Error('Depth limit of ' + this.depthLimit + ' exceeded!');
                        }
                        // @todo while inserting object I have to measure the depth of the object in addition to the current depth
                        if (!current[segment]) {
                            current[segment] = {};
                        }
                        if (segmentIndex <= segments.length - 2) {
                            current = current[segment];
                        }
                        else {
                            current[segment] = value;
                            return [2 /*return*/, true];
                        }
                    }
                }
                // @todo cannot be covered by a test, also it makes not sense. Any ideas ?
                return [2 /*return*/, false];
            });
        });
    };
    Database.prototype.get = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, _a, segments, current, currentPath, segments_1, segments_1_1, segment;
            return __generator(this, function (_b) {
                path = core_1.Path.ensurePath(path);
                if (path.length() === 0) {
                    return [2 /*return*/, this.mapping];
                }
                else {
                    segments = path.getSegments();
                    current = this.mapping;
                    currentPath = new core_1.Path();
                    try {
                        for (segments_1 = __values(segments), segments_1_1 = segments_1.next(); !segments_1_1.done; segments_1_1 = segments_1.next()) {
                            segment = segments_1_1.value;
                            if (segment in current) {
                                currentPath.child(segment);
                                current = current[segment];
                            }
                            else {
                                throw new Error('Path "' + segment + '" not found under "' + currentPath.toString() + '"!');
                            }
                        }
                    }
                    catch (e_1_1) {
                        e_1 = {error: e_1_1};
                    }
                    finally {
                        try {
                            if (segments_1_1 && !segments_1_1.done && (_a = segments_1.return)) _a.call(segments_1);
                        }
                        finally {
                            if (e_1) throw e_1.error;
                        }
                    }
                    return [2 /*return*/, current];
                }
                return [2 /*return*/];
            });
        });
    };
    Database.prototype.reference = function (path) {
        return new Reference_1.Reference(this, core_1.Path.ensurePath(path));
    };
    Database.prototype.collection = function (path) {
        return new CollectionReference_1.CollectionReference(this, core_1.Path.ensurePath(path));
    };
    return Database;
}());
exports.Database = Database;
//# sourceMappingURL=Database.js.map