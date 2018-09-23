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
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const database_1 = require("@apibase/database");
const fs = require("fs");
const core_1 = require("@apibase/core");
const workingDirectory = process.cwd();
const dataDirectory = path.join(workingDirectory, 'data');
const databaseFile = path.join(dataDirectory, 'database.json');
const historyFile = path.join(dataDirectory, 'history.json');
exports.database = new database_1.Database();
function load() {
    return __awaiter(this, void 0, void 0, function* () {
        const mapping = JSON.parse(fs.readFileSync(databaseFile, 'utf8'));
        const history = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
        exports.database['mapping'] = mapping;
        exports.database['history'] = new core_1.Map(convertToTupelArray(history));
    });
}
exports.load = load;
function save() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!fs.existsSync(dataDirectory)) {
            fs.mkdirSync(dataDirectory);
        }
        const mapping = yield exports.database.getMapping();
        fs.writeFileSync(databaseFile, JSON.stringify(mapping));
        const changes = yield exports.database.getChanges();
        const history = [];
        for (let pair of changes.entries()) {
            history.push(pair);
        }
        fs.writeFileSync(historyFile, JSON.stringify(history));
    });
}
exports.save = save;
load()
    .catch(save)
    .then(load);
function convertToTupelArray(data) {
    return data.map(item => {
        let change;
        const path = item[1]['path']['segments'];
        if (typeof item[1]['value'] !== "undefined") {
            change = new database_1.SetChange(path, item[1]['value']);
        }
        else {
            change = new database_1.DeleteChange(path);
        }
        change['timestamp'] = new Date(item[1]['timestamp']);
        return [item[0], change];
    });
}
exports.convertToTupelArray = convertToTupelArray;
//# sourceMappingURL=Database.js.map