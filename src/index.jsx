import React from 'react';
import { render } from 'react-dom';
import App from './App'

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducers from './reducers';

import 'bootstrap/dist/css/bootstrap.css'
import 'react-select/dist/react-select.css';

const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app-root')
);
