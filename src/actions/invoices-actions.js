import { getInvoices } from '../API';

export const FETCH_INVOICES = 'invoices:fetchInvoices';
export const FETCHED_INVOICES = 'invoices:fetchedInvoices';

export function fetchInvoices(dispatch) {
    dispatch({ type: FETCH_INVOICES });

    getInvoices()
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: FETCHED_INVOICES,
                payload: data
            });
        });
}   