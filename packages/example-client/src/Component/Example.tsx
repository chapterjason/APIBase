import * as React from 'react';
import { Snapshot, CollectionSnapshot, CollectionReference } from '@apibase/database';
import { ClientDatabase } from '../Database/ClientDatabase';
import { Logger, createdAt } from '@apibase/core';
import { ClientCollectionReference } from '../Database/Reference/ClientCollectionReference';
import { create } from 'domain';

export interface User {
    name: string;
}

export interface ExampleProps {

}

export interface ExampleState {
    users: CollectionSnapshot<User>;
    inputText: string;
    sortBy: string;
    sortOrder: boolean;
}

export class Example extends React.Component<ExampleProps, ExampleState> {

    protected database: ClientDatabase = new ClientDatabase('http://localhost:3000');

    protected reference: ClientCollectionReference<User>;

    constructor(props: any) {
        super(props);
        this.state = { users: null, inputText: '', sortBy: 'key', sortOrder: false };
        this.reference = this.database.collection('users');
    }

    public componentDidMount() {
        this.update();
    }

    protected update() {
        this.reference.get()
            .then(snapshot => {
                this.setState({ users: snapshot })
            })
            .catch(error => {
                Logger.error(error);
            });
    }

    protected delete(key: string) {
        this.reference.reference(key).delete()
            .then(result => {
                if (result) {
                    this.update();
                }
            })
            .catch(error => {
                Logger.error(error);
            });
    }

    protected renderItem(snapshot: Snapshot<User>) {
        const key = snapshot.key();
        const user = snapshot.value();

        return (
            <tr key={key}>
                <td>{key}</td>
                <td>{createdAt(key).toLocaleString()}</td>
                <td>{user.name}</td>
                <td>
                    <div className={"btn-group"}>
                        <button className={"btn btn-secondary"}>Edit</button>
                        <button className={"btn btn-danger"} onClick={() => this.delete(key)}>Delete</button>
                    </div>
                </td>
            </tr>
        );
    }

    protected renderItems() {
        const items: JSX.Element[] = [];

        if (this.state.users && this.state.users.length() > 0) {
            this.state.users.forEach(snapshot => {
                items.push(this.renderItem(snapshot));
            })
        }

        return items;
    }

    protected sortBy = (type: "key" | "created" | "name") => {
        if (this.state.sortBy === type) {
            this.setState({ sortOrder: !this.state.sortOrder });
        } else {
            this.setState({ sortOrder: false, sortBy: type });
        }
    }

    protected handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ inputText: event.target.value });
    }

    protected handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            this.addUser();
        }
    }

    protected addUser = () => {
        this.reference
            .push({ name: this.state.inputText })
            .then(result => {
                this.setState({ inputText: '' });
                this.update();
            })
            .catch(error => {
                Logger.error(error);
            });
    }

    public render() {
        let debug: string = '';

        if (this.state.users && this.state.users.length() > 0) {
            debug = JSON.stringify(this.state.users.value(), null, 4);

            if (this.state.sortBy === 'key') {
                this.state.users.sortByKey();
            } else if (this.state.sortBy === 'created') {
                this.state.users.sort((a, b) => {
                    const aDate = createdAt(a[0]);
                    const bDate = createdAt(b[0]);
                    return aDate > bDate ? -1 : aDate < bDate ? 1 : 0;
                });
            }else if (this.state.sortBy === 'name') {
                this.state.users.sortByProperty('name');
            }

            if (this.state.sortOrder) {
                this.state.users.reverse();
            }
        }

        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-4"}>
                        <pre><code>{debug}</code></pre>
                    </div>
                    <div className={"col-md-8"}>
                        <table className={"table table-bordered table-striped"}>
                            <thead>
                                <tr>
                                    <th onClick={() => this.sortBy('key')}>ID</th>
                                    <th onClick={() => this.sortBy('created')}>Created at</th>
                                    <th onClick={() => this.sortBy('name')}>Name</th>
                                    <th>#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderItems()}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>#</th>
                                    <th>#</th>
                                    <th><input type="text" value={this.state.inputText} onKeyPress={this.handleKeyPress} onChange={this.handleChange} className={"form-control"} /></th>
                                    <th><button className={"btn btn-primary"} onClick={this.addUser}>Add</button></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

}