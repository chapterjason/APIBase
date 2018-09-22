import {Path} from "@apibase/core";

export interface ChangeInterface {
    getPath(): Path;

    getTimestamp(): Date;
}
