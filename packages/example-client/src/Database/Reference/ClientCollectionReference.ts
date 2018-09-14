import { generateIdentifier } from "@apibase/core";
import { CollectionIndex, CollectionReferenceInterface, CollectionSnapshot } from "@apibase/database";
import { ClientReference } from "./ClientReference";

export class ClientCollectionReference<ReferenceType = any> extends ClientReference<CollectionIndex<ReferenceType>> implements CollectionReferenceInterface<ReferenceType> {

    public push(value?: ReferenceType): Promise<ClientReference<ReferenceType>> {
        const id = generateIdentifier();
        const reference = new ClientReference<ReferenceType>(this.database, this.path.child(id));

        if (typeof value !== "undefined") {
            return reference
                .set(value)
                .then(done => {
                    // @todo what is if the data could not be set?
                    return reference;
                });
        }

        return Promise.resolve(reference);
    }

    public get(): Promise<CollectionSnapshot<ReferenceType>> {
        return this.database
            .get<CollectionIndex<ReferenceType>>(this.path)
            .then(value => {
                return new CollectionSnapshot<ReferenceType>(this, value);
            })
    }
}