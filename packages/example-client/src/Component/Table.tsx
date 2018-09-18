import {CollectionSnapshot} from "@apibase/database";
import * as React from "react";
import {ClientDatabase} from "../Database/ClientDatabase";
import {ClientCollectionReference} from "../Database/Reference/ClientCollectionReference";
import {Logger} from "@apibase/core";
import {Button, HTMLTable, InputGroup} from "@blueprintjs/core";
import {Item} from "./Item";

export interface TableProps {
    uri: string;
    path: string;
}

export interface TableState<ItemType = any> {
    items: CollectionSnapshot<ItemType>;
    inputText: string;
    sortBy: string;
    sortOrder: boolean;
}

export class Table<ItemType = any> extends React.Component<TableProps, TableState<ItemType>> {

    protected database: ClientDatabase;

    protected reference: ClientCollectionReference<ItemType>;

    protected sortBy = (type: "key" | "created" | "name") => {
        if (this.state.sortBy === type) {
            this.setState({sortOrder: !this.state.sortOrder});
        } else {
            this.setState({sortOrder: false, sortBy: type});
        }
    };
    protected handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({inputText: event.target.value});
    };
    protected handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            this.addItem();
        }
    };
    protected addItem = () => {
        this.reference
            .push(({name: this.state.inputText} as any) as ItemType)
            .then(() => {
                this.setState({inputText: ''});
                this.update();
            })
            .catch(error => {
                Logger.error(error);
            });
    };

    constructor(props: TableProps) {
        super(props);
        this.database = new ClientDatabase(this.props.uri);
        this.state = {items: null, inputText: '', sortBy: 'key', sortOrder: false};
        this.reference = this.database.collection(this.props.path);
    }

    public componentDidMount() {
        this.update();
    }

    public render() {
        return (
            <HTMLTable>
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
                        <th>
                            <InputGroup type={"text"} value={this.state.inputText} onKeyPress={this.handleKeyPress}
                                        onChange={this.handleChange}/>
                        </th>
                        <th>
                            <Button icon={"add"} onClick={this.addItem}>Add</Button>
                        </th>
                    </tr>
                </tfoot>
            </HTMLTable>
        );
    }

    public update() {
        this.reference.get()
            .then(snapshot => {
                this.setState({items: snapshot})
            })
            .catch(error => {
                Logger.error(error);
            });
    }

    public delete(key: string) {
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

    public setValue(key: string, value: ItemType) {
        this.reference.reference<ItemType>(key).set(value)
            .then(result => {
                if (result) {
                    this.update();
                }
            })
            .catch(error => {
                Logger.error(error);
            });
    }

    protected renderItems(): JSX.Element[] {
        if (this.state.items !== null) {
            return this.state.items.map<JSX.Element>(snapshot => {
                return (
                    <Item key={snapshot.key()} table={this} snapshot={snapshot}/>
                );
            });
        }

        return [];
    }

}