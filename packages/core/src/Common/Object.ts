import {Path} from "./Path";

export function isObject(object: any) {
    return !Array.isArray(object) && object !== null && typeof object === "object";
}

export function walkDeep(object: object, callback: (path: Path, value: any) => void) {
    if (isObject(object)) {
        const keys: string[] = Object.keys(object);

        for (let key of keys) {
            const value = object[key];
            callback(new Path(key), value);
            walkDeep(value, (path: Path, value: any) => {
                callback(new Path([key, path.toString()]), value);
            });
        }
    }
}