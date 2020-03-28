import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Notifications from 'react-notify-toast';
import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter as Router } from 'react-router-dom';
import store, { history } from './store';


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Notifications />
                <App />
            </div>
        </Router>
    </Provider>
    ,
    document.getElementById('root'));
