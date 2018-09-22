export declare type PathType = Path | string | string[];
export declare class Path {
    protected segments: string[];

    constructor(path?: PathType);

    static ensurePath(path: PathType): Path;

    protected static normalize(segment: string | string[]): string[];

    toString(): string;

    getSegments(): string[];

    parent(): Path | null;

    child(segment: string): Path;

    length(): number;

    end(): string | null;
}
