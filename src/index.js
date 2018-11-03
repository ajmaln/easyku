import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppSafari from './AppSafari';

import Notifications from 'react-notify-toast';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'


const isSafari = () => navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") === -1;

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Notifications />
                { isSafari() ? <AppSafari />: <App/>}
            </div>
        </ConnectedRouter>
    </Provider>
    ,
    document.getElementById('root'));


console.log(isSafari(), navigator.userAgent, window);
