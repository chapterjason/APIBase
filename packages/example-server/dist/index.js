"use strict";
/*
 * This file is part of the APIBase package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */
Object.defineProperty(exports, "__esModule", {value: true});
var core_1 = require("@apibase/core");
var Database_1 = require("./Database");
var express = require("express");
var cors = require("cors");
var ResponseError_1 = require("./Response/ResponseError");
var ResponseSuccess_1 = require("./Response/ResponseSuccess");
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
    var path = new core_1.Path(request.path);
    if (request.method === 'GET') { // get
        try {
            var data = Database_1.database.get(path);
            response.send(new ResponseSuccess_1.ResponseSuccess(data));
        }
        catch (error) {
            response.status(500);
            response.send(new ResponseError_1.ResponseError(error.message));
        }
    }
    else if (request.method === 'POST') { // set
        try {
            var collectionReference = Database_1.database.collection(path);
            var reference = collectionReference.push(request.body);
            response.send(new ResponseSuccess_1.ResponseSuccess(Database_1.database.get(reference.getPath())));
        }
        catch (error) {
            response.status(500);
            response.send(new ResponseError_1.ResponseError(error.message));
        }
    }
    else if (request.method === 'PUT') { // set
        try {
            Database_1.database.set(path, request.body);
            response.send(new ResponseSuccess_1.ResponseSuccess(Database_1.database.get(path)));
        }
        catch (error) {
            response.status(500);
            response.send(new ResponseError_1.ResponseError(error.message));
        }
    }
    else if (request.method === 'DELETE') { // delete
        try {
            response.send(new ResponseSuccess_1.ResponseSuccess(Database_1.database.delete(path)));
        }
        catch (error) {
            response.status(500);
            response.send(new ResponseError_1.ResponseError(error.message));
        }
    }
    Database_1.save();
});
server.all('*', function (request, response) {
});
server.listen(3000, function () {
    return console.log('Example-server listening on port 3000!');
});
//# sourceMappingURL=index.js.map