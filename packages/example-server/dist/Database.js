"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var database_1 = require("@apibase/database");
var fs = require("fs");
var workingDirectory = process.cwd();
var dataDirectory = path.join(workingDirectory, 'data');
var databaseFile = path.join(dataDirectory, 'database.json');
exports.database = new database_1.Database();
function load() {
    exports.database.set('/', JSON.parse(fs.readFileSync(databaseFile, 'utf8')));
}
exports.load = load;
function save() {
    if (!fs.existsSync(dataDirectory)) {
        fs.mkdirSync(dataDirectory);
    }
    fs.writeFileSync(databaseFile, JSON.stringify(exports.database.get('/')));
}
exports.save = save;
try {
    load(); // file not exist -> throw error
}
catch (error) {
    save(); // create directory and file
    load(); // load created file
}
//# sourceMappingURL=Database.js.map