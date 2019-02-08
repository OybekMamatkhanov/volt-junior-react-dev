import React from 'react';
import Table from 'react-bootstrap/lib/Table'
import Button from 'react-bootstrap/lib/Button';

export default function TableList({ data = [], columns = [], onEdit }) {

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

                            {onEdit && <td><Button onClick={onEdit(item)}>edit</Button></td>}
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )

}
