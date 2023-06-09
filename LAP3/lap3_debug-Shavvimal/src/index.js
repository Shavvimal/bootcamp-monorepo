import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {BrowserRouter} from 'react-router-dom';
import store from './store';
import App from './App.js';
import './styles/index.css';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
document.getElementById("root"));