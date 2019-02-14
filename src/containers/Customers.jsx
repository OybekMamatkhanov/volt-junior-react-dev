import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import TableList from '../components/TableList';
import { BeatLoader } from 'react-spinners';


import { customersColumns } from '../helpers/columns';
import Modal from '../components/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { connect } from 'react-redux';
import { fetchCustomers } from '../actions/customers-actions';
import { fetchCustomer, clearCustomer, updateCustomer, addCustomer } from '../actions/customer';

class Customers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            modalIsOpen: false,
            editData: {},
            isNew: true
        };

        this.toggleCustomerModal = this.toggleCustomerModal.bind(this);
        this.createCustomer = this.createCustomer.bind(this);
        this.openCustomer = this.openCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.openCreateCustomerForm = this.openCreateCustomerForm.bind(this);
    }

    componentDidMount() {
        this.props.getCustomers();
    }

    toggleCustomerModal() {
        const { modalIsOpen } = this.state;

        if (modalIsOpen) this.props.clearCustomer();
        this.setState({ modalIsOpen: !modalIsOpen })
    }

    createCustomer(values) {
        this.props.addCustomer(values);
        this.props.getCustomers();
    }

    openCreateCustomerForm() {
        this.setState({ isNew: true }, () => {
            this.toggleCustomerModal();
        })
    }

    openCustomer(id) {
        this.props.getCustomer(id);

        this.setState({ isNew: false });
        
        this.toggleCustomerModal();
    }

    editCustomer(values) {        
        this.props.updateCustomer(values.id, values);
        this.props.getCustomers();
    }

    render() {
        const { modalIsOpen } = this.state;
        const { customers, customer } = this.props;
        return (
            <div>                
                <PageHeader>
                    Customer List <Button onClick={this.openCreateCustomerForm}>Create</Button>
                </PageHeader>
                    {
                        customers.isFetched ? 
                        <TableList
                            data={customers.data}
                            columns={customersColumns}
                            onEdit={this.openCustomer}
                        /> :                
                        <BeatLoader
                            sizeUnit={"px"}
                            size={50}
                            color={'#D3D3D3'}
                            loading={this.state.loading}
                        /> 
                    }        
                    {
                        modalIsOpen &&
                        <Modal
                            open={modalIsOpen}
                            title="Customer"
                            close={this.toggleCustomerModal}
                        >                               
                            <Formik
                                initialValues={customer.data}
                                enableReinitialize={!!(customer.data && customer.data.id)}
                                onSubmit={this.state.isNew ? this.createCustomer : this.editCustomer}
                                render={() => {
                                    return (
                                        <Form>
                                            <Field type="name" name="name" />
                                            <Field type="address" name="address" />
                                            <Field type="phone" name="phone" />
                                            <button type="submit">
                                                {this.state.isNew ? `Save` : `Edit`}
                                            </button>
                                        </Form>
                                    )
                                }}
                            />
                        </Modal>
                    }
                    :
            </div>
        )
    }
}

const mapStateToProps = state => ({
    customers: state.customers,
    customer: state.customer
});

const mapDispatchToProps = (dispatch) => {
    return {
        getCustomers: () => fetchCustomers(dispatch),
        getCustomer: (id) => fetchCustomer(dispatch, id),
        clearCustomer: () => clearCustomer(dispatch),
        updateCustomer: (id, data) => updateCustomer(dispatch, id, data),
        addCustomer: (data) => addCustomer(dispatch, data)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);