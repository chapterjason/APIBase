import * as path from "path";
import {Database} from "@apibase/database";
import * as fs from "fs";

const workingDirectory = process.cwd();
const dataDirectory = path.join(workingDirectory, 'data');
const databaseFile = path.join(dataDirectory, 'database.json');

export const database = new Database();

export async function load() {
    return database.set('/', JSON.parse(fs.readFileSync(databaseFile, 'utf8')));
}

export async function save() {
    if (!fs.existsSync(dataDirectory)) {
        fs.mkdirSync(dataDirectory);
    }

    return database.get('/').then(value => {
        fs.writeFileSync(databaseFile, JSON.stringify(value));
    })
}

load()
    .catch(save)
    .then(load);