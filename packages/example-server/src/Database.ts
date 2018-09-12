import * as path from "path";
import {Database} from "@apibase/database";
import * as fs from "fs";

const workingDirectory = process.cwd();
const dataDirectory = path.join(workingDirectory, 'data');
const databaseFile = path.join(dataDirectory, 'database.json');

export const database = new Database();

export function load() {
    database.set('/', JSON.parse(fs.readFileSync(databaseFile, 'utf8')));
}

export function save() {
    if (!fs.existsSync(dataDirectory)) {
        fs.mkdirSync(dataDirectory);
    }

    fs.writeFileSync(databaseFile, JSON.stringify(database.get('/')));
}

try {
    load(); // file not exist -> throw error
} catch (error) {
    save(); // create directory and file
    load(); // load created file
}