import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import TableList from '../components/TableList';

import { getCustomers } from '../API';
import { customersColumns } from '../helpers/columns';
import Modal from '../components/Modal';

export default class Customers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            modalIsOpen: false,
            editData: {}
        };

        this.toggleCustomerModal = this.toggleCustomerModal.bind(this);
        this.createCustomer = this.createCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
    }

    componentDidMount() {
        getCustomers()
            .then(res => res.json())
            .then(data => {
                this.setState({ data })
            })
    }

    toggleCustomerModal() {
        this.setState({ modalIsOpen: !this.state.modalIsOpen })
    }

    createCustomer() {
        this.setState({ editData: {} }, () => {
            this.toggleCustomerModal();
        })
    }

    editCustomer(data) {
        return () => {
            this.setState({ editData: data }, () => {
                this.toggleCustomerModal();
            })
        }
    }

    render() {
        let { data, modalIsOpen, editData } = this.state;

        return (
            <div>
                <PageHeader>
                    Customer List <Button onClick={this.createCustomer}>Create</Button>
                </PageHeader>

                <TableList
                    data={data}
                    columns={customersColumns}
                    onEdit={this.editCustomer}
                />

                {
                    modalIsOpen &&
                    <Modal
                        open={modalIsOpen}
                        title="Example"
                        close={this.toggleCustomerModal}
                    >
                        <ul>
                            {Object.keys(editData).map(k => <li>{editData[k]}</li>)}
                        </ul>
                    </Modal>
                }
            </div>
        )
    }
}