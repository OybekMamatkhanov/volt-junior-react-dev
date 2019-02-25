import {
    FETCH_CUSTOMER,
    FETCHED_CUSTOMER,
    CLEAR_CUSTOMER,
    UPDATE_CUSTOMER,
    UPDATED_CUSTOMER,
    ADD_CUSTOMER,
    ADDED_CUSTOMER,
    DELETE_CUSTOMER,
    DELETED_CUSTOMER
} from '../actions/customer';

const initialState = {
    isFetched: false,
    isDeleted: false,
    data: {}
};

export default function customerReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CUSTOMER:
            return { isFetched: false, isDeleted: false };
        case FETCHED_CUSTOMER:
            return { isFetched: true, isDeleted: false, data: action.payload };
        case CLEAR_CUSTOMER:
            return initialState;
        case UPDATE_CUSTOMER:
            return { isFetched: false, isDeleted: false };
        case UPDATED_CUSTOMER:
            return { isFetched: true, isDeleted: false, data: action.payload };
        case ADD_CUSTOMER:
            return { isFetched: false, isDeleted: false };
        case ADDED_CUSTOMER:
            return { isFetched: true, isDeleted: false, data: action.payload };
        case DELETE_CUSTOMER:
            return { isDeleted: false };
        case DELETED_CUSTOMER:
            return { isDeleted: true, data: action.payload };
        default:
            return state;
    }
}