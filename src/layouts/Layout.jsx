import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { INVOICES_URL, CUSTOMERS_URL, PRODUCTS_URL } from '../const/app_urls'
import { withRouter } from 'react-router-dom';

function Layout({children, history}) {
    
    function transitionTo(path) {
        return () => history.push(path)
    }

    return (
        <div className="container">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Invoice App
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} onClick={transitionTo(INVOICES_URL)}>
                            Invoices
                        </NavItem>
                        <NavItem eventKey={2} onClick={transitionTo(CUSTOMERS_URL)}>
                            Customers
                        </NavItem>
                        <NavItem eventKey={3} onClick={transitionTo(PRODUCTS_URL)}>
                            Products
                        </NavItem>
                    </Nav>
                </Navbar>

                {children}
        </div>
    )
}

export default withRouter(Layout)