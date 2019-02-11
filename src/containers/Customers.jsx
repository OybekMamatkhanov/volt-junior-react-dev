import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import TableList from '../components/TableList';
import { BeatLoader } from 'react-spinners';


import { customersColumns } from '../helpers/columns';
import Modal from '../components/Modal';
import DynamicForm from '../components/DynamicForm';

import { connect } from 'react-redux';
import { fetchCustomers } from '../actions/customers-actions';
import { fetchCustomer } from '../actions/customer';

class Customers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            modalIsOpen: false,
            editData: {},
        };

        this.toggleCustomerModal = this.toggleCustomerModal.bind(this);
        this.createCustomer = this.createCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
    }

    componentDidMount() {
        this.props.getCustomers();
    }

    toggleCustomerModal() {
        this.setState({ modalIsOpen: !this.state.modalIsOpen })
    }

    createCustomer() {
        this.setState({ editData: {} }, () => {
            this.toggleCustomerModal();
        })
    }

    editCustomer(id) {
        this.props.getCustomer(id);
        
        this.toggleCustomerModal();
    }

    render() {
        let { modalIsOpen, editData } = this.state;
        let { customers } = this.props;
        return (
            <div>
                
                <PageHeader>
                    Customer List <Button onClick={this.createCustomer}>Create</Button>
                </PageHeader>
                    {
                        customers.isFetched ? 
                        <TableList
                            data={customers.data}
                            columns={customersColumns}
                            onEdit={this.editCustomer}
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
                            title="Edit Customer"
                            close={this.toggleCustomerModal}
                        >                               
                            
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);