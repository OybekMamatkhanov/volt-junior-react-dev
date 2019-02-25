import { getProducts } from '../API';

export const FETCH_PRODUCTS = 'products:fetchProducts';
export const FETCHED_PRODUCTS = 'products:fetchedProducts';

export function fetchProducts(dispatch) {
    dispatch({ type: FETCH_PRODUCTS });

    getProducts()
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: FETCHED_PRODUCTS,
                payload: data
            });
        });
}
