import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Layout from './layouts/Layout';

import Invoices from './containers/Invoices';
import Customers from './containers/Customers';
import Products from './containers/Products';

import { INVOICES_URL, CUSTOMERS_URL, PRODUCTS_URL } from './const/app_urls'

class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path={INVOICES_URL} component={Invoices} />
                        <Route path={CUSTOMERS_URL} component={Customers} />
                        <Route path={PRODUCTS_URL} component={Products} />
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

export default App;
