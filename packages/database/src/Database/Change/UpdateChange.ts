import {AbstractChange} from "./AbstractChange";
import {PathType} from "@apibase/core";

export class UpdateChange<DataType = any> extends AbstractChange {

    protected before: DataType;

    protected value: DataType;

    protected type: string = 'update';

    constructor(path: PathType, before: DataType, value: DataType) {
        super(path);
        this.before = before;
        this.value = value;
    }

    public getBefore(): DataType {
        return this.before;
    }

    public getValue(): DataType {
        return this.value;
    }
}