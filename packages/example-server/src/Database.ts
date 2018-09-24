import * as path from "path";
import {ChangeInterface, CreateChange, Database, DeleteChange, UpdateChange} from "@apibase/database";
import * as fs from "fs";
import {Map, MapTupel} from "@apibase/core";

const workingDirectory = process.cwd();
const dataDirectory = path.join(workingDirectory, 'data');
const databaseFile = path.join(dataDirectory, 'database.json');
const historyFile = path.join(dataDirectory, 'history.json');

export const database = new Database();

export async function load() {
    const mapping = JSON.parse(fs.readFileSync(databaseFile, 'utf8'));
    const history = JSON.parse(fs.readFileSync(historyFile, 'utf8'));

    database['mapping'] = mapping;
    database['history'] = new Map<string, ChangeInterface>(convertToTupelArray(history));
}

export async function save() {
    if (!fs.existsSync(dataDirectory)) {
        fs.mkdirSync(dataDirectory);
    }

    const mapping = await database.getMapping();
    fs.writeFileSync(databaseFile, JSON.stringify(mapping));

    const changes = await database.getChanges();
    const history = [];

    for (let pair of changes.entries()) {
        history.push(pair);
    }

    fs.writeFileSync(historyFile, JSON.stringify(history));
}

load()
    .catch(save)
    .then(load);

type SyncData = MapTupel<string, ChangeData>;

interface ChangeData {
    path: { segments: string[] },
    timestamp: string;
    value?: any;
}

export function convertToTupelArray(data: Array<SyncData>) {
    return data.map(item => {
        let change: ChangeInterface;
        const type = item[1]['type'];
        const path = item[1]['path']['segments'];

        if (type === "create") {
            change = new CreateChange(path, item[1]['value']);
        } else if (type === "update") {
            change = new UpdateChange(path, item[1]['value'], item[1]['before']);
        } else if (type === "delete") {
            change = new DeleteChange(path);
        }

        change['timestamp'] = new Date(item[1]['timestamp']);

        return [item[0], change];
    }) as Array<MapTupel<string, ChangeInterface>>;
}