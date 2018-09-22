import {ChangeInterface} from "./ChangeInterface";
import {Path, PathType} from "@apibase/core";

export declare abstract class AbstractChange implements ChangeInterface {
    protected path: Path;
    protected timestamp: Date;

    constructor(path: PathType);

    getPath(): Path;

    getTimestamp(): Date;
}
