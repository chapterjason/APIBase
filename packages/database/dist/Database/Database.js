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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@apibase/core");
const Reference_1 = require("./Reference/Reference");
const CollectionReference_1 = require("./Reference/CollectionReference");
const DeleteChange_1 = require("./Change/DeleteChange");
const SetChange_1 = require("./Change/SetChange");
class Database {
    constructor(mapping = {}) {
        this.depthLimit = 32;
        this.changes = new core_1.Map();
        this.original = mapping;
        this.mapping = mapping;
    }
    getMapping() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(this.mapping);
        });
    }
    getChanges() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(this.changes);
        });
    }
    applyChanges(changes) {
        return __awaiter(this, void 0, void 0, function* () {
            changes.forEach((change, key) => {
                this.changes.set(key, change);
            });
            this.mapping = this.original;
            this.changes.sort((a, b) => {
                return a[1].getTimestamp().getTime() - b[1].getTimestamp().getTime();
            });
            for (let change of this.changes.values()) {
                if (change instanceof DeleteChange_1.DeleteChange) {
                    yield this.applyDelete(change);
                }
                else if (change instanceof SetChange_1.SetChange) {
                    yield this.applySet(change);
                }
            }
        });
    }
    delete(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const change = new DeleteChange_1.DeleteChange(path);
            this.changes.set(core_1.generateIdentifier(), change);
            return this.applyDelete(change);
        });
    }
    set(path, value) {
        return __awaiter(this, void 0, void 0, function* () {
            const change = new SetChange_1.SetChange(path, value);
            this.changes.set(core_1.generateIdentifier(), change);
            return this.applySet(change);
        });
    }
    applySet(change) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = core_1.Path.ensurePath(change.getPath());
            if (path.length() === 0) {
                this.mapping = change.getValue();
                return true;
            }
            else {
                const segments = path.getSegments();
                let current = this.mapping;
                let depth = 1;
                for (let segmentIndex = 0; segmentIndex < segments.length; segmentIndex++) {
                    const segment = segments[segmentIndex];
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
                        current[segment] = change.getValue();
                        return true;
                    }
                }
            }
            // @todo cannot be covered by a test, also it makes not sense. Any ideas ?
            /* istanbul ignore next */
            return false;
        });
    }
    get(path) {
        return __awaiter(this, void 0, void 0, function* () {
            path = core_1.Path.ensurePath(path);
            if (path.length() === 0) {
                return this.mapping;
            }
            else {
                const segments = path.getSegments();
                let current = this.mapping;
                const currentPath = new core_1.Path();
                for (let segment of segments) {
                    if (segment in current) {
                        currentPath.child(segment);
                        current = current[segment];
                    }
                    else {
                        throw new Error('Path "' + segment + '" not found under "' + currentPath.toString() + '"!');
                    }
                }
                return current;
            }
        });
    }
    reference(path) {
        return new Reference_1.Reference(this, core_1.Path.ensurePath(path));
    }
    collection(path) {
        return new CollectionReference_1.CollectionReference(this, core_1.Path.ensurePath(path));
    }
    applyDelete(change) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = core_1.Path.ensurePath(change.getPath());
            if (path.length() === 0) {
                this.mapping = {};
                return true;
            }
            else {
                const segments = path.getSegments();
                let current = this.mapping;
                const lastIndex = segments.length - 1;
                const currentPath = new core_1.Path();
                let itemIndex = 0;
                for (; itemIndex < segments.length; itemIndex++) {
                    const segment = segments[itemIndex];
                    if (segment in current) {
                        currentPath.child(segment);
                        if (itemIndex === lastIndex) {
                            delete current[segment];
                            return true;
                        }
                        current = current[segment];
                    }
                    else {
                        return false;
                    }
                }
            }
        });
    }
}
exports.Database = Database;
//# sourceMappingURL=Database.js.map