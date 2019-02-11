import React, { Component } from 'react';
import Table from 'react-bootstrap/lib/Table'
import Button from 'react-bootstrap/lib/Button';

export default class TableList extends Component {
    constructor(props) {
        super(props);

        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit (id) {
        return () => {
            this.props.onEdit(id);
        }
    }

    render() {
        const { data, columns, onEdit } = this.props;

        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        {
                            columns.map(item => {
                                return (<th key={item.id}>{item.name}</th>)
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                {columns.map(column =>
                                    <td key={column.id}>{item[column.field] ? item[column.field] : <span>&nbsp;</span>}</td>
                                )}

                                {onEdit && <td><Button onClick={this.handleEdit(item.id)}>edit</Button></td>}
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        );
    }
}
