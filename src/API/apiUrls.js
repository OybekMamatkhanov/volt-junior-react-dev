export const customersUrl = '/api/customers';
export const customerUrl = (id) => `/api/customers/${id}`

export const productsUrl = '/api/products';
export const productUrl = (id) => `/api/products/${id}`;

export const invoicesUrl = '/api/invoices';
export const invoiceUrl = (id) => `/api/invoices/${id}`;
export const invoiceItemsUrl = (id) => `/api/invoices/${id}/items`;
export const invoiceItemUrl = (id, invoice_id) => `/api/invoices/${invoice_id}/items/${id}`;
