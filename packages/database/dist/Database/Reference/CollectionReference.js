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
const Reference_1 = require("./Reference");
const core_1 = require("@apibase/core");
const __1 = require("../..");
class CollectionReference extends Reference_1.Reference {
    push(value) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = core_1.generateIdentifier();
            const reference = new Reference_1.Reference(this.database, this.path.child(id));
            if (typeof value !== "undefined") {
                yield reference.set(value);
            }
            return reference;
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const value = yield this.database.get(this.path);
            return new __1.CollectionSnapshot(this, value);
        });
    }
}
exports.CollectionReference = CollectionReference;
//# sourceMappingURL=CollectionReference.js.map