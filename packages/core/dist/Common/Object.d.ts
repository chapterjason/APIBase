import {Path} from "./Path";

export declare function isObject(object: any): boolean;
export declare function walkDeep(object: object, callback: (path: Path, value: any) => void): void;
