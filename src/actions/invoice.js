import {  postInvoice } from '../API';

export const ADD_INVOICE = 'invoice:addInvoice';
export const ADDED_INVOICE = 'invoice:addedInvoice';

export function addInvoice(dispatch, data) {
    dispatch({ type: ADD_INVOICE });

    postInvoice(data)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: ADDED_INVOICE,
                payload: data
            });
        });
}

export const ADD_INVOICE_ITEM = 'invoice:addInvoiceItem';
export const ADDED_INVOICE_ITEM = 'invoice:addedInvoiceItem';

export function addInvoiceItem(dispatch, data) {
    
}
