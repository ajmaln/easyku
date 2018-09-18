import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { messaging } from './utils/firebase';
import Notifications, { notify } from 'react-notify-toast';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'

ReactDOM.render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
        <div>
            <Notifications />
            <App />
        </div> 
    </ConnectedRouter>
    </Provider>
    ,
    document.getElementById('root'));
//registerServiceWorker();

messaging.onMessage(function (payload) {
    console.log('Message received. ', payload);
    notify.show(payload.data.body + ', please refresh')
});
navigator.serviceWorker
    .register(`${process.env.PUBLIC_URL}/firebase-messaging-sw.js`)
    .then((registration) => messaging.useServiceWorker(registration))