import customersReducer from './customers-reducers';
import customerReducer from './customer';

import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    customers: customersReducer,
    customer: customerReducer,
});

export default rootReducers;