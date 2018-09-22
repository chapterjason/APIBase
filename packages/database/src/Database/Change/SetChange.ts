import {AbstractChange} from "./AbstractChange";
import {PathType} from "@apibase/core";

export class SetChange extends AbstractChange {

    protected value: any;

    constructor(path: PathType, value: any) {
        super(path);
        this.value = value;
    }

    public getValue(): any {
        return this.value;
    }
}