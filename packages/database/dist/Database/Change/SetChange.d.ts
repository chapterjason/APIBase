import {AbstractChange} from "./AbstractChange";
import {PathType} from "@apibase/core";

export declare class SetChange extends AbstractChange {
    protected value: any;
    constructor(path: PathType, value: any);
    getValue(): any;
}
