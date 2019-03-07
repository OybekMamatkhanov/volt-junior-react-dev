import { getProduct, postProduct, putProduct } from '../API';

export const FETCH_PRODUCT = 'product:fetchProduct';
export const FETCHED_PRODUCT = 'product:fetchedProduct';

export function fetchProduct(dispatch, id) {
    dispatch({ type: FETCH_PRODUCT });
    getProduct(id)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: FETCHED_PRODUCT,
                payload: data
            });
        });
}


export const UPDATE_PRODUCT = 'product:updateProduct';
export const UPDATED_PRODUCT = 'product:updatedProduct';

export function updateProduct(dispatch, id, data) {
    dispatch({ type: UPDATE_PRODUCT });

    putProduct(id, data)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: UPDATED_PRODUCT,
                payload: data
            });
        });
}

export const ADD_PRODUCT = 'product:addProducts';
export const ADDED_PRODUCT = 'product:addedProducts';


export function addProduct(dispatch, data) {
    dispatch({ type: ADD_PRODUCT });

    postProduct(data)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: ADDED_PRODUCT,
                payload: data
            });
        });
}

export const CLEAR_PRODUCT = 'product:clearProduct';

export function clearProduct(dispatch) {
    dispatch({
        type: CLEAR_PRODUCT,
    });
}
