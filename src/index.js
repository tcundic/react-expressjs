import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';

import './styles/styles.scss';
import App from './app/App';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
