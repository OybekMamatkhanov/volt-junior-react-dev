import customersReducer from './customers';
import customerReducer from './customer';
import productsReducer from './products';
import productReducer from './product';
import invoicesReducer from './invoices'

import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    customers: customersReducer,
    customer: customerReducer,
    products: productsReducer,
    product: productReducer,
    invoices: invoicesReducer
});

export default rootReducers;