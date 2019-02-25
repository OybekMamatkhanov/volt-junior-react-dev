import { getCustomers } from '../API';

export const FETCH_CUSTOMERS = 'customers:fetchCustomers';
export const FETCHED_CUSTOMERS = 'customers:fetchedCustomers';

export function fetchCustomers(dispatch) {
    dispatch({ type: FETCH_CUSTOMERS });

    getCustomers()
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: FETCHED_CUSTOMERS,
                payload: data
            });
        });
}   