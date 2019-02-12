import { 
    FETCH_CUSTOMER, 
    FETCHED_CUSTOMER,
    CLEAR_CUSTOMER,
    UPDATE_CUSTOMER,
    UPDATED_CUSTOMER,
    ADD_CUSTOMER,
    ADDED_CUSTOMER
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
        case CLEAR_CUSTOMER:
            return initialState;
        case UPDATE_CUSTOMER:            
            return { isFetched: false};
        case UPDATED_CUSTOMER:
            return { isFetched: true, data: action.payload };  
        case ADD_CUSTOMER:            
            return { isFetched: false};
        case ADDED_CUSTOMER:
            return { isFetched: true, data: action.payload };  
        default: 
            return state;
    }
}