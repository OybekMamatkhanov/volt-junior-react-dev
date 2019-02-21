import { getCustomer, putCustomer, postCustomer, deleteCustomer } from '../API';

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

export const CLEAR_CUSTOMER = 'customer:clearCustomer';

export function clearCustomer(dispatch) {
    dispatch({
        type: CLEAR_CUSTOMER,
    });
}

export const UPDATE_CUSTOMER = 'customer:updateCustomer';
export const UPDATED_CUSTOMER = 'customer:updatedCustomer';

export function updateCustomer(dispatch, id, data) {
    dispatch({ type: UPDATE_CUSTOMER });

    putCustomer(id, data)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: UPDATED_CUSTOMER,
                payload: data
            });
        });
}

export const ADD_CUSTOMER = 'customer:addCustomer';
export const ADDED_CUSTOMER = 'customer:addedCustomer';

export function addCustomer(dispatch, data) {
    dispatch({ type: ADD_CUSTOMER });

    postCustomer(data)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: ADDED_CUSTOMER,
                payload: data
            });
        });
}

export const DELETE_CUSTOMER = 'customer:deleteCustomer';
export const DELETED_CUSTOMER = 'customer:deletedCustomer';

export function removeCustomer(dispatch, id) {
    dispatch({ type: DELETE_CUSTOMER });

    deleteCustomer(id)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: DELETED_CUSTOMER,
                payload: data
            });
        });
}