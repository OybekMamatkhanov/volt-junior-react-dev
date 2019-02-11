import customersReducer from './customers-reducers';
import customerReducer from './customer';
//import updateProducts from './reducers/products-reducers';
//import updateInvoice from './reducers/invoice-reducers';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    customers: customersReducer,
    customer: customerReducer
});

export default rootReducers;