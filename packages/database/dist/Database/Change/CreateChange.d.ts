import {AbstractChange} from "./AbstractChange";
import {PathType} from "@apibase/core";

export declare class CreateChange<DataType = any> extends AbstractChange {
    protected value: DataType;
    protected type: string;

    constructor(path: PathType, value: DataType);

    getValue(): DataType;
}
