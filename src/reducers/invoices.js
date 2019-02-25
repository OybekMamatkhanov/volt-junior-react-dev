import { 
    FETCH_INVOICES, 
    FETCHED_INVOICES,
} from '../actions/invoices';

const initialState = {
    isFetched: false,
    data: []
};

export default function invoicesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_INVOICES:
            return { isFetched: false };
        case FETCHED_INVOICES:
            return { isFetched: true, data: action.payload };
        default: 
            return state;
    }
}