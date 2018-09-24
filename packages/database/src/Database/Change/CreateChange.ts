import {AbstractChange} from "./AbstractChange";
import {PathType} from "@apibase/core";

export class CreateChange<DataType = any> extends AbstractChange {

    protected value: DataType;

    protected type: string = 'create';

    constructor(path: PathType, value: DataType) {
        super(path);
        this.value = value;
    }

    public getValue(): DataType {
        return this.value;
    }
}