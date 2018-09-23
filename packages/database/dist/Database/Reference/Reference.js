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
const __1 = require("../..");
const core_1 = require("@apibase/core");
class Reference {
    constructor(database, path) {
        this.database = database;
        this.path = path;
    }
    getPath() {
        return this.path;
    }
    key() {
        return this.path.end();
    }
    toJSON() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                path: this.path.toString(),
                value: (yield this.get()).value()
            };
        });
    }
    parent() {
        if (this.path.length() === 0) { // parent of root is null
            return null;
        }
        else if (this.path.length() === 1) { // parent
            return new Reference(this.database, new core_1.Path());
        }
        else {
            return new Reference(this.database, this.path.parent());
        }
    }
    reference(segment) {
        return new Reference(this.database, this.path.child(segment));
    }
    collection(segment) {
        return new __1.CollectionReference(this.database, this.path.child(segment));
    }
    set(value) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.database.set(this.path, value);
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const value = yield this.database.get(this.path);
            return new __1.Snapshot(this, value);
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.database.delete(this.path);
        });
    }
}
exports.Reference = Reference;
//# sourceMappingURL=Reference.js.map