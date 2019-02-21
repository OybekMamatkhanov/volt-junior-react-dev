import { 
    customersUrl, 
    customerUrl,
    productsUrl, 
    productUrl,  
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

export function putCustomer(id, data) {
    return fetch(customerUrl(id), {
        method: 'PUT',
        headers: new Headers({
            'Content-Type': 'application/json'
          }),
        body: JSON.stringify(data)
    });
}

export function deleteCustomer(id) {
    return fetch(customerUrl(id), {
        method: 'DELETE'
    });
}

export function postCustomer(data) {
    return fetch(customersUrl, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
          }),
        body: JSON.stringify(data)
    });
}

export function getProducts() {
    return fetch(productsUrl);
}

export function getProduct(id) {
    return fetch(productUrl(id));
}

export function putProduct(id, data) {
    return fetch(productUrl(id), {
        method: 'PUT',
        headers: new Headers({
            'Content-Type': 'application/json'
          }),
        body: JSON.stringify(data)
    });
}

export function postProduct(data) {
    return fetch(productsUrl, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
          }),
        body: JSON.stringify(data)
    });
}

export function getInvoices() {
    return fetch(invoicesUrl);
}


