export declare class Path {
    protected segments: string[];
    constructor(path?: string | string[]);
    static ensurePath(path: Path | string | string[]): Path;
    protected static normalize(segment: string | string[]): string[];
    toString(): string;
    getSegments(): string[];
    parent(): Path | null;
    child(segment: string): Path;
    length(): number;
    end(): string | null;
}
