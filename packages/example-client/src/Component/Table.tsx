import {CollectionReference, CollectionSnapshot} from "@apibase/database";
import * as React from "react";
import {ClientDatabase} from "../Database/ClientDatabase";
import {createdAt, Logger} from "@apibase/core";
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

    protected reference: CollectionReference<ItemType>;

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
    protected handleKeyPress = async (event) => {
        if (event.key == 'Enter') {
            await this.addItem();
        }
    };

    protected addItem = async () => {
        Logger.info('Adding...');

        try {
            const item = ({name: this.state.inputText} as any) as ItemType;
            const result = await this.reference.push(item);

            const items = this.state.items;
            items['_map'].set(result.key(), item);

            this.setState({inputText: '', items});
            Logger.info('Added!');
        } catch (error) {
            Logger.error(error);
        }
    };

    constructor(props: TableProps) {
        super(props);
        this.database = new ClientDatabase(this.props.uri);
        this.state = {items: null, inputText: '', sortBy: 'key', sortOrder: false};
        this.reference = this.database.collection(this.props.path);
    }

    public async componentDidMount() {
        await this.update();
    }

    public render() {
        this.preRender();
        return (
            <div>
                <Button onClick={() => this.database.syncLoop(() => this.forceUpdate())}>Synchronize</Button>
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
            </div>
        );
    }

    public async update() {
        Logger.info('Updating...');
        try {
            const snapshot = await this.reference.get();
            Logger.info('Updated!');
            this.setState({items: snapshot});
        } catch (error) {
            Logger.error(error);
        }
    }

    public async delete(key: string) {
        Logger.info('Deleting', key);

        try {
            const result = await this.reference.reference(key).delete();

            if (result) {
                Logger.info(key, 'deleted!');
                await this.update();
            }
        } catch (error) {
            Logger.error(error);
        }
    }

    public async setValue(key: string, value: ItemType) {
        Logger.info('Update', key);

        try {
            const result = await this.reference.reference<ItemType>(key).set(value);

            if (result) {
                Logger.info('Updated', key);
                await this.update();
            }
        } catch (error) {
            Logger.error(error);
        }
    }

    protected preRender() {
        if (this.state.items) {
            const sortBy = this.state.sortBy;
            if (sortBy === "key") {
                this.state.items.sortByKey();
            } else if (sortBy === 'created') {
                this.state.items.sort((a, b) => {
                    const aDate = createdAt(a[0]);
                    const bDate = createdAt(b[0]);
                    return aDate > bDate ? -1 : aDate < bDate ? 1 : 0;
                });
            } else if (sortBy === 'name') {
                this.state.items.sortByProperty('name');
            }

            if (this.state.sortOrder) {
                this.state.items.reverse();
            }
        }
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