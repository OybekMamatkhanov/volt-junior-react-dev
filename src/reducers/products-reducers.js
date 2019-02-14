import {
    FETCH_PRODUCTS,
    FETCHED_PRODUCTS,
} from '../actions/products-actions';

const initialState = {
    isFetched: false,
    data: []
};

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { isFetched: false };
        case FETCHED_PRODUCTS:
            return { isFetched: true, data: action.payload };
        default:
            return state;
    }
}