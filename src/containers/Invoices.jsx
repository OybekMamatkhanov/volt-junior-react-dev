import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import TableList from '../components/TableList';

import { invoicesColumns } from '../helpers/columns';
import { fetchInvoices } from '../actions/invoices';
import { connect } from 'react-redux';
import { INVOICES_ITEM_URL } from '../const/app_urls';
import { withRouter } from 'react-router-dom';

class Invoices extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
        this.transitionTo = this.transitionTo.bind(this);
    }

    transitionTo(path) {
        return () => this.props.history.push(path)
    }

    componentDidMount() {
        console.log(this.props);
        this.props.getInvoices();
    }

    render() {
        const { invoices } = this.props;
        console.log(invoices);
        return (
            <div>
                <PageHeader>
                    Invoice List <Button onClick={this.transitionTo(`invoices/:id/create`)}>Create</Button>
                </PageHeader>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    invoices: state.invoices,
});

const mapDispatchToProps = (dispatch) => {
    return {
        getInvoices: () => fetchInvoices(dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invoices);