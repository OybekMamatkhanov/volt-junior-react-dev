import React, { Component } from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Form from 'react-bootstrap/lib/Form';

import { connect } from 'react-redux';
import { fetchCustomers } from '../actions/customers';

class InvoiceItem extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        this.props.getCustomers();
    }

    handleChange(e) {
        console.log(e.target.value);
    }

    render() {
        const { customers } = this.props;
        console.log(customers.data)
        return (
            <div>
                <h1>
                    Edit Invoice
                </h1>
                <div className="invoice-data">
                    <form>
                        <FormGroup controlId="invoiceInputDiscount" >
                            <ControlLabel>Discount (%)</ControlLabel>
                            <FormControl
                                bsSize="sm"
                                type="text"                                                      
                            />
                        </FormGroup>                        
                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Customer</ControlLabel>
                            <FormControl componentClass="select" placeholder="Select..." onChange={this.handleChange}>
                                <option value="">Select...</option>
                                {
                                    customers.isFetched && customers.data.map((items) => (
                                        <option key={items.id} value={items.id}>{items.name}</option>
                                    ))
                                    
                                }
                            </FormControl>  
                        </FormGroup>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    customers: state.customers
});

const mapDispatchToProps = (dispatch) => {
    return {
        getCustomers: () => fetchCustomers(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceItem);