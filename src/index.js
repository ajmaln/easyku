import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppSafari from './AppSafari';
import { firebase } from './utils/firebase';

import Notifications from 'react-notify-toast';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store';


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Notifications />
                {firebase.messaging.isSupported() ? <App /> : <AppSafari />}
            </div>
        </ConnectedRouter>
    </Provider>
    ,
    document.getElementById('root'));
