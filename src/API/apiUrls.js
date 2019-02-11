export const customersUrl = '/api/customers'; // GET|POST
export const customerUrl = (id) => `/api/customers/${id}`; // GET|PUT|DELETE

export const productsUrl = '/api/products';// GET|POST
export const productUrl = (id) => `/api/products/${id}`; // GET|PUT|DELETE

export const invoicesUrl = '/api/invoices';// GET|POST
export const invoiceUrl = (id) => `/api/invoices/${id}`; // GET|PUT|DELETE

export const invoiceItemsUrl = (id) => `/api/invoices/${id}/items`;// GET|POST
export const invoiceItemUrl = (id, invoice_id) => `/api/invoices/${invoice_id}/items/${id}`;// GET|PUT|DELETE
