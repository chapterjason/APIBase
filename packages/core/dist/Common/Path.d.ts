export declare class Path {
    protected segments: string[];
    constructor();
    constructor(segments: string[]);
    constructor(path: string);
    protected static normalize(segments: string[]): string[];
    protected static normalize(segment: string): string[];
    toString(): string;
    getSegments(): string[];
    parent(): Path | null;
    child(segment: string): Path;
    length(): number;
    end(): string | null;
}
