import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Layout from './layouts/Layout';

import Invoices from './containers/Invoices';
import Customers from './containers/Customers';
import Products from './containers/Products';
import InvoiceItem from './components/InvoiceItem';


import { INVOICES_URL, CUSTOMERS_URL, PRODUCTS_URL, INVOICES_ITEM_URL } from './const/app_urls'

class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path={INVOICES_URL} component={Invoices} />
                        <Route path={CUSTOMERS_URL} component={Customers} />
                        <Route path={PRODUCTS_URL} component={Products} />                        
                        <Route path={INVOICES_ITEM_URL} component={InvoiceItem} />
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

export default App;
