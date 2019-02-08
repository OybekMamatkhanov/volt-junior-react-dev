import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import TableList from '../components/TableList';

import { getInvoices } from '../API';
import { invoicesColumns } from '../helpers/columns';

export default class Invoices extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    handleClick() {
        console.log("rest");
    }

    componentDidMount() {
        getInvoices()
            .then(res => res.json())
            .then(data => {
                this.setState({ data })
            })
    }

    render() {
        let { data } = this.state;
        
        return (
            <div>
                <PageHeader>
                    Invoice List <Button onClick={this.handleClick}>Create</Button>
                </PageHeader>

                <TableList
                    data={data}
                    columns={invoicesColumns}
                />
            </div>
        )
    }
}