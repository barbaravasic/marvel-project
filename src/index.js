import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>, 
    document.getElementById('root'));
registerServiceWorker();
