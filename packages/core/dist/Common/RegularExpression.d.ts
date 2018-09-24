export declare function escape(string: string): string;
export declare function match(string: string, regexp: RegExp): boolean;
export interface Match {
    index: number;
    input: string;
    groups: string[];
}

export declare function getKeys(raw: string): string[];

export declare function matchAll(string: string, regexp: RegExp): {
    index: number;
    input: string;
    groups: string[];
}[];
