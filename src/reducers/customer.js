import { 
    FETCH_CUSTOMER, 
    FETCHED_CUSTOMER,
} from '../actions/customer';

const initialState = {
    isFetched: false,
    data: {}
};

export default function customerReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CUSTOMER:
            return { isFetched: false };
        case FETCHED_CUSTOMER:
            return { isFetched: true, data: action.payload };
        default: 
            return state;
    }
}