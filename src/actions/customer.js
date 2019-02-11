import { getCustomer } from '../API';

export const FETCH_CUSTOMER = 'customer:fetchCustomer';
export const FETCHED_CUSTOMER = 'customer:fetchedCustomer';

export function fetchCustomer(dispatch, id) {
    dispatch({ type: FETCH_CUSTOMER });

    getCustomer(id)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: FETCHED_CUSTOMER,
                payload: data
            });
        });
    }