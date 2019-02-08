import React, { Component } from 'react';
import TableList from '../components/TableList';
import PageHeader from 'react-bootstrap/lib/PageHeader'
import Button from 'react-bootstrap/lib/Button';

import { getProducts } from '../API';
import { productsColumns } from '../helpers/columns';

export default class Products extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: []
        };
    }

    componentDidMount() {
        getProducts()
            .then(res => res.json())
            .then(data => {
                this.setState({ data })
            });
    }

    render() {
        const { data } = this.state;
        console.log(this.state.data);
        return (
            <div>
                <PageHeader>
                    Product List <Button>Create</Button>
                </PageHeader>

                <TableList
                    data={data}
                    columns={productsColumns}
                />
            </div>
        )
    }
}