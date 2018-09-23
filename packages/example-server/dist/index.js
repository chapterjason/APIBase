"use strict";
/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@apibase/core");
const Database_1 = require("./Database");
const express = require("express");
const cors = require("cors");
const DatabaseSet_1 = require("./Handler/DatabaseSet");
const DatabaseDelete_1 = require("./Handler/DatabaseDelete");
const DatabaseGet_1 = require("./Handler/DatabaseGet");
const DatabaseSync_1 = require("./Handler/DatabaseSync");
core_1.Logger.setLogLevel(core_1.LogLevel.LLLL);
const server = express();
// body will be parsed as json
server.use(express.json());
// response json as default
server.use((request, response, next) => {
    response.header('Content-Type', 'application/json');
    next();
});
// set cors header
server.use(cors());
// database handler
server.use(DatabaseGet_1.DatabaseGet(Database_1.database));
server.use(DatabaseSet_1.DatabaseSet(Database_1.database, Database_1.save));
server.use(DatabaseDelete_1.DatabaseDelete(Database_1.database, Database_1.save));
server.use(DatabaseSync_1.DatabaseSync(Database_1.database, Database_1.save));
server.all('*', (request, response) => {
});
server.listen(3000, () => console.log('Example-server listening on port 3000!'));
//# sourceMappingURL=index.js.map