import {AbstractChange} from "./AbstractChange";

export class DeleteChange extends AbstractChange {
    protected type: string = 'delete';
}