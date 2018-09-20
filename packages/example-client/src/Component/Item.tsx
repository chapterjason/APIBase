import * as React from 'react';
import {Snapshot} from "@apibase/database";
import {createdAt, isObject} from "@apibase/core";
import {Button, ButtonGroup, InputGroup} from "@blueprintjs/core";
import {Table} from "./Table";

export interface ItemProps<ItemType = any> {
    snapshot: Snapshot<ItemType>;
    table: Table;
}

interface ValuesInterface {
    [key: string]: string;
}

export interface ItemState {
    editMode: boolean;
    values: ValuesInterface;
}

export class Item<ItemType = any> extends React.PureComponent<ItemProps<ItemType>, ItemState> {

    protected handleChange = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const values = {...this.state.values};
        values[key] = event.target.value;
        this.setState({values});
    };
    protected edit = () => {
        this.setState({editMode: true});
    };
    protected save = () => {
        this.setState({editMode: false});

        const value = this.props.snapshot.value();
        const key = this.props.snapshot.key();

        if (Array.isArray(value)) {
            this.props.table.setValue(key, this.state.values);
        } else if (isObject(value)) {
            this.props.table.setValue(key, this.state.values);
        } else {
            this.props.table.setValue(key, this.state.values[key]);
        }
    };

    constructor(props: ItemProps) {
        super(props);

        const value = props.snapshot.value();
        const key = props.snapshot.key();

        const values = {};
        if (Array.isArray(value)) {
            value.forEach((value, index) => values[index] = value);
        } else if (isObject(value)) {
            Object
                .keys(value)
                .forEach((key) => values[key] = value[key]);
        } else {
            values[key] = value;
        }

        this.state = {editMode: false, values: values};
    }

    public render() {
        const key = this.props.snapshot.key();
        const item = this.props.snapshot.value();

        return (
            <tr key={key}>
                <td>{key}</td>
                <td>{createdAt(key).toLocaleString()}</td>
                {this.renderItem(key, item)}
                <td>
                    <ButtonGroup>
                        {this.state.editMode ? (<Button icon={"tick"} onClick={this.save}>Save</Button>) : (
                            <Button icon={"edit"} onClick={this.edit}>Edit</Button>)}

                        <Button icon={"delete"} onClick={() => this.props.table.delete(key)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        );
    }

    protected renderItem(key: string, item: ItemType) {
        if (this.state.editMode) {
            if (Array.isArray(item)) {
                return item.map((value, index) => (
                    <td key={index}>
                        <InputGroup type={"text"} value={this.state.values[index]}
                                    onChange={(event) => this.handleChange(index.toString(), event)}/>
                    </td>
                ));
            } else if (isObject(item)) {
                return Object
                    .keys(item)
                    .map(_key => (
                        <td key={_key}>
                            <InputGroup type={"text"} value={this.state.values[_key]}
                                        onChange={(event) => this.handleChange(_key, event)}/>
                        </td>
                    ));
            } else {
                return (
                    <td>
                        <InputGroup type={"text"} value={this.state.values['key']}
                                    onChange={(event) => this.handleChange(key, event)}/>
                    </td>
                );
            }
        } else {
            if (Array.isArray(item)) {
                return item.map((value, index) => (<td key={index}>{value}</td>));
            } else if (isObject(item)) {
                return Object
                    .keys(item)
                    .map(_key => (<td key={_key}>{item[_key]}</td>));
            } else {
                return (
                    <td>{item}</td>
                );
            }
        }
    }


}