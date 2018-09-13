import { Path } from "@apibase/core";
import { ReferenceInterface, Snapshot, ReferenceJSON } from "@apibase/database";
import { ClientDatabase } from "../ClientDatabase";
import { ClientCollectionReference } from "./ClientCollectionReference";

export class ClientReference<ReferenceType = any> implements ReferenceInterface<ReferenceType> {

    protected database: ClientDatabase;

    protected path: Path;

    public constructor(database: ClientDatabase, path: Path) {
        this.database = database;
        this.path = path;
    }

    public getPath(): Path {
        return this.path;
    }

    public key(): string {
        return this.path.end();
    }

    public toJSON(): Promise<ReferenceJSON> {
        return this
            .get()
            .then((snapshot) => {
                return {
                    path: this.path.toString(),
                    value: snapshot.value()
                };
            });

    }

    public parent<ParentReferenceType = any>(): ClientReference<ParentReferenceType> | null {
        if (this.path.length() === 0) { // parent of root is null
            return null;
        } else if (this.path.length() === 1) { // parent
            return new ClientReference<ParentReferenceType>(this.database, new Path());
        } else {
            return new ClientReference<ParentReferenceType>(this.database, this.path.parent());
        }
    }

    public reference<ReferenceType = any>(segment: string): ClientReference<ReferenceType> {
        return new ClientReference<ReferenceType>(this.database, this.path.child(segment));
    }

    public collection<ReferenceType = any>(segment: string): ClientCollectionReference<ReferenceType> {
        return new ClientCollectionReference<ReferenceType>(this.database, this.path.child(segment));
    }

    public set(value: ReferenceType): Promise<boolean> {
        return this.database.set(this.path, value);
    }

    public get(): Promise<Snapshot<ReferenceType>> {
        return this.database.get<ReferenceType>(this.path)
            .then(data => {
                return new Snapshot<ReferenceType>(this, data);
            });
    }

    public delete(): Promise<boolean> {
        return this.database.delete(this.path);
    }

}