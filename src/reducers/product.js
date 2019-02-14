import {
    ADD_PRODUCT,
    ADDED_PRODUCT,
    FETCH_PRODUCT,
    FETCHED_PRODUCT,
    CLEAR_PRODUCT,
    UPDATE_PRODUCT,
    UPDATED_PRODUCT
} from '../actions/product';

const initialState = {
    isFetched: false,
    data: {}
};

export default function productReducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_PRODUCT:
            return { isFetched: false };
        case FETCHED_PRODUCT:
            return { isFetched: true, data: action.payload };
        case ADD_PRODUCT:
            return { isFetched: false };
        case ADDED_PRODUCT:
            return { isFetched: true, data: action.payload };
        case CLEAR_PRODUCT:
            return initialState;
        case UPDATE_PRODUCT:
            return { isFetched: false };
        case UPDATED_PRODUCT:
            return { isFetched: true, data: action.payload };
        default:
            return state;
    }
}