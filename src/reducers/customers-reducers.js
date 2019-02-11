import { 
    FETCH_CUSTOMERS, 
    FETCHED_CUSTOMERS,
} from '../actions/customers-actions';

const initialState = {
    isFetched: false,
    data: []
};

export default function customersReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CUSTOMERS:
            return { isFetched: false };
        case FETCHED_CUSTOMERS:
            return { isFetched: true, data: action.payload };
        default: 
            return state;
    }
}