import { 
    customersUrl, 
    customerUrl, 
    productUrl, 
    productsUrl, 
    invoicesUrl, 
    invoiceUrl, 
    invoiceItemsUrl, 
    invoiceItemUrl 
} from "./apiUrls";

export function getCustomers() {
    return fetch(customersUrl);
}

export function getCustomer(id) {
    return fetch(customerUrl(id));
}

export function getProducts() {
    return fetch(productsUrl);
}

export function getProduct(id) {
    return fetch(productUrl(id));
}

export function getInvoices() {
    return fetch(invoicesUrl);
}


