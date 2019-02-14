import customersReducer from './customers-reducers';
import customerReducer from './customer';
import productsReducer from './products-reducers';
import productReducer from './product';
import invoicesReducer from './invoices-reducers'

import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    customers: customersReducer,
    customer: customerReducer,
    products: productsReducer,
    product: productReducer,
    invoices: invoicesReducer
});

export default rootReducers;