import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { messaging, getToken } from './utils/firebase';
import Notifications, { notify } from 'react-notify-toast';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Notifications />
            <App />
        </div>
    </BrowserRouter>, 
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