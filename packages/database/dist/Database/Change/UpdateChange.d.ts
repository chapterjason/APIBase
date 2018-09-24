import {AbstractChange} from "./AbstractChange";
import {PathType} from "@apibase/core";

export declare class UpdateChange<DataType = any> extends AbstractChange {
    protected before: DataType;
    protected value: DataType;
    protected type: string;

    constructor(path: PathType, before: DataType, value: DataType);

    getBefore(): DataType;

    getValue(): DataType;
}
