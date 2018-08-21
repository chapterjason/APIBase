export interface DatabaseIndex {
    [key: string]: any;
}
export declare class Database {
    protected mapping: DatabaseIndex;
    protected depthLimit: number;
    constructor(mapping?: DatabaseIndex);
    load(file: string): void;
    save(file: string): void;
    protected setRoot(value: any): void;
    protected static normalizePath(path: string): string[];
    push(path: string, value: any): string;
    set(path: string, value: any): this;
    get<T>(path: string): T;
}
