"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("@apibase/database");
var database = new database_1.Database();
var databaseFile = './data/data.dat';
console.time('Test');
database.load(databaseFile);
for (var i = 0; i < 1; i++) {
    database.push('/push/test', Math.random());
}
database.save(databaseFile);
console.timeEnd('Test');
console.log(Object.keys(database.get('/push/test')).length);
//# sourceMappingURL=index.js.map