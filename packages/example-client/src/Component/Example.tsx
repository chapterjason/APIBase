import * as React from 'react';
import {Table} from "./Table";

export interface User {
    name: string;
}

export interface ExampleProps {
}

export interface ExampleState {

}

export class Example extends React.Component<ExampleProps, ExampleState> {

    public render() {

        return (
            <div>
                <Table path={'users'} uri={'http://localhost:3000'}/>
            </div>
        );
    }

}