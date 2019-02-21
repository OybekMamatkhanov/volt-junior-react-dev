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

    handleDelete (id) {
        return () => {
            this.props.onDelete(id);
        }
    }

    render() {
        const { data, columns } = this.props;

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

                                <td><Button onClick={this.handleEdit(item.id)}>Edit</Button></td>
                                <td><Button onClick={this.handleDelete(item.id)}>Remove</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        );
    }
}
