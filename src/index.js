import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { messaging, getToken } from './firebase';
import Notifications, { notify } from 'react-notify-toast';

ReactDOM.render(
    <div>
        <Notifications />
        <App />
    </div>, 
    document.getElementById('root'));
//registerServiceWorker();

messaging.onMessage(function (payload) {
    console.log('Message received. ', payload);
    notify.show(payload.data.body + ', please refresh')
});
navigator.serviceWorker
    .register(`${process.env.PUBLIC_URL}/firebase-messaging-sw.js`)
    .then((registration) => messaging.useServiceWorker(registration))
    .then(getToken)