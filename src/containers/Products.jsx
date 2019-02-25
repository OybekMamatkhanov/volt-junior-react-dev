import React, { Component } from 'react';
import TableList from '../components/TableList';
import PageHeader from 'react-bootstrap/lib/PageHeader'
import Button from 'react-bootstrap/lib/Button';
import { BeatLoader } from 'react-spinners';

import { productsColumns } from '../helpers/columns';
import Modal from '../components/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { connect } from 'react-redux';
import { fetchProducts } from '../actions/products';
import { fetchProduct, addProduct, clearProduct, updateProduct } from '../actions/product';

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            modalIsOpen: false,
            editData: {},
            isNew: true
        };

        this.toggleProductModal = this.toggleProductModal.bind(this);
        this.openCreateProductForm = this.openCreateProductForm.bind(this);
        this.createProduct = this.createProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.openProduct = this.openProduct.bind(this);
    }

    componentDidMount() {
        this.props.getProducts();
    }

    toggleProductModal() {
        const { modalIsOpen } = this.state;

        if (modalIsOpen) this.props.clearProduct();
        this.setState({ modalIsOpen: !modalIsOpen })
    }

    createProduct(values) {
        this.props.addProduct(values);
        this.props.getProducts();
    }

    openCreateProductForm() {
        this.setState({ isNew: true }, () => {
            this.toggleProductModal();
        })
    }

    openProduct(id) {
        this.props.getProduct(id);

        this.setState({ isNew: false });
        
        this.toggleProductModal();
    }

    editProduct(values) {
        this.props.updateProduct(values.id, values);
        this.props.getProducts();
    }

    render() {
        const { modalIsOpen } = this.state;
        const { products, product } = this.props;
        return (
            <div>
                <PageHeader>
                    Product List <Button onClick={this.openCreateProductForm}>Create</Button>
                </PageHeader>
                {
                    products.isFetched ?
                        <TableList
                            data={products.data}
                            columns={productsColumns}
                            onEdit={this.openProduct}
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
                        title="Product"
                        close={this.toggleProductModal}
                    >
                        <Formik
                            initialValues={product.data}
                            enableReinitialize={!!(product.data && product.data.id)}
                            onSubmit={this.state.isNew ? this.createProduct : this.editProduct}
                            render={() => {
                                return (
                                    <Form>
                                        <Field type="name" name="name" />
                                        <Field type="text" name="price" />
                                        <button type="submit">
                                            {this.state.isNew ? `Save` : `Edit`}
                                        </button>
                                    </Form>
                                )
                            }}
                        />
                    </Modal>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products,
    product: state.product,
});

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => fetchProducts(dispatch),
        getProduct: (id) => fetchProduct(dispatch, id),
        clearProduct: () => clearProduct(dispatch),
        updateProduct: (id, data) => updateProduct(dispatch, id, data),
        addProduct: (data) => addProduct(dispatch, data)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);