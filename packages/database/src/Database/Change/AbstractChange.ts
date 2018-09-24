import {ChangeInterface} from "./ChangeInterface";
import {Path, PathType} from "@apibase/core";

export abstract class AbstractChange implements ChangeInterface {

    protected path: Path;

    protected timestamp: Date;

    protected type: string = undefined;

    public constructor(path: PathType) {
        this.path = Path.ensurePath(path);
        this.timestamp = new Date();
    }

    public getPath(): Path {
        return this.path;
    }

    public getTimestamp(): Date {
        return this.timestamp;
    }

    public getType(): string {
        return this.type;
    }

}