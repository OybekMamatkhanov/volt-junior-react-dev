import React, { Component } from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';

import Form from 'react-bootstrap/lib/Form';

import { connect } from 'react-redux';
import { fetchCustomers } from '../actions/customers';
import { fetchProducts } from '../actions/products';
import { fetchProduct } from '../actions/product';
import { get } from 'http';


class InvoiceItem extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            discount: '',
            customer_id: '',
            product_id: '',
            total: '',
            items: []
        }

        this.handleChangeCustomer = this.handleChangeCustomer.bind(this);
        this.handleChangeProduct = this.handleChangeProduct.bind(this);
        this.handleChangeDiscount = this.handleChangeDiscount.bind(this);
        this.addItemsProduct = this.addItemsProduct.bind(this);
    }

    componentDidMount() {
        this.props.getCustomers();
        this.props.getProducts();    
    }

    getProduct(id, field){
        const { products } = this.props;
        const product = products.data.find(item => item.id === id);
        if (field === 'name')
            return product.name;
        if (field === 'price')
            return product.price;

    }
    
    addItemsProduct() {
        let { product_id } = this.state;

        this.setState({
            items: [...this.state.items, 
                {
                    product_id: product_id, 
                    quantity: 1
                }
            ]
        });
    }

    handleChangeCustomer(event) {
        this.setState({ 
            customer_id: +event.target.value
        });
    }

    handleChangeProduct(event) {
        let product_id = +event.target.value
        
        this.setState({ 
            product_id: product_id
        });
    }

    handleChangeDiscount(event) {
        this.setState({ 
            discount: +event.target.value
        });
    }

    handleChangeQuantity(event) {

    }


    render() {
        const { customers, products } = this.props;
        const { items } = this.state;

        return (
            <div>
                <h1>
                    Create Invoice
                </h1>
                <div className="invoice-data">
                    <form>
                        <FormGroup controlId="invoiceInputDiscount">
                            <ControlLabel>Discount (%)</ControlLabel>
                            <FormControl
                                bsSize="sm"
                                type="text"
                                onChange={this.handleChangeDiscount}
                                value={this.state.discount}                                                                                                                                    
                            />
                            <ControlLabel>Customer</ControlLabel>
                            <FormControl componentClass="select" placeholder="Select..." onChange={this.handleChangeCustomer} value={this.state.customer_id}>
                                <option value="">Select...</option>
                                {
                                    customers.isFetched && customers.data.map((items) => (
                                        <option key={items.id} value={items.id}>{items.name}</option>
                                    ))
                                    
                                }
                            </FormControl>  
                            <ControlLabel>Add Product</ControlLabel>
                            <FormControl componentClass="select" placeholder="Select..." onChange={this.handleChangeProduct} value={this.state.product_id}>
                                <option value="">Select...</option>
                                    {
                                        products.isFetched && products.data.map((items) => (
                                            <option key={items.id} value={items.id}>{items.name}</option>
                                        ))                                    
                                    }
                            </FormControl>
                            <Button onClick={this.addItemsProduct}>Add</Button>
                            <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            items.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{this.getProduct(item.product_id, 'name')}</td>
                                                    <td>{this.getProduct(item.product_id, 'price')}</td>
                                                    <td><input type="text" defaultValue={item.quantity} onChange={this.handleChangeQuantity} /></td>
                                                </tr>
                                            ))                                            
                                        }
                                    </tbody>
                            </Table>


                            <Button type="submit">Save</Button>
                        </FormGroup>

                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    customers: state.customers,
    products: state.products,
    product: state.product
});

const mapDispatchToProps = (dispatch) => {
    return {
        getCustomers: () => fetchCustomers(dispatch),
        getProducts: () => fetchProducts(dispatch),
        getProduct: (id) => fetchProduct(dispatch, id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceItem);