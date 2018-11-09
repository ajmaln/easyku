import firebase from 'firebase/app';
import 'firebase/messaging';
import 'firebase/firestore';

import { notify } from 'react-notify-toast';


var config = {
    apiKey: "AIzaSyD3l7LInSkCQog2t6J7X2-Bm9fBza_ijKA",
    authDomain: "ku-view.firebaseapp.com",
    databaseURL: "https://ku-view.firebaseio.com",
    projectId: "ku-view",
    storageBucket: "ku-view.appspot.com",
    messagingSenderId: "77378557282"
};

firebase.initializeApp(config);

let messaging;

if (firebase.messaging.isSupported()) {
    messaging = firebase.messaging();
    messaging.usePublicVapidKey("BDDNlVdwUP39dJEu9rfD7kBEOUvaUXhJkuQqC4Nc4B0P3HtpVl0E_9EXjgCqYp0N0UvO3pqDvCoE8qzoEUdRo_U");
    messaging.onTokenRefresh(function () {
        messaging.getToken().then(function (refreshedToken) {
            console.log('Token refreshed.');
            // Indicate that the new Instance ID token has not yet been sent to the
            // app server.
            // setTokenSentToServer(false);
            // Send Instance ID token to app server.
            sendTokenToServer(refreshedToken);
            // ...
        }).catch(function (err) {
            console.log('Unable to retrieve refreshed token ', err);
            //showToken('Unable to retrieve refreshed token ', err);
        });
    });
    messaging.onMessage(function (payload) {
        console.log('Message received. ', payload);
        notify.show(payload.data.body + ', please refresh')
    });
    navigator.serviceWorker
        .register(`${process.env.PUBLIC_URL}/firebase-messaging-sw.js`)
        .then((registration) => messaging.useServiceWorker(registration))
}

const db = firebase.firestore();

const settings = {/* your settings... */ timestampsInSnapshots: true };
db.settings(settings);




const getToken = () => {
    messaging.getToken().then(function (currentToken) {
        if (currentToken) {
            sendTokenToServer(currentToken);
            updateUIForPushEnabled(currentToken);
        } else {
            // Show permission request.
            console.log('No Instance ID token available. Request permission to generate one.');
            // Show permission UI

            messaging.requestPermission().then(function () {
                console.log('Notification permission granted.');
                // Get token for current instance
                getToken()
            }).catch(function (err) {
                console.log('Unable to get permission to notify.', err);
            });
            // Show permission UI.
            // updateUIForPushPermissionRequired();
            // setTokenSentToServer(false);
        }
    }).catch(function (err) {
        console.log('An error occurred while retrieving token. ', err);
        //showToken('Error retrieving Instance ID token. ', err);
        //setTokenSentToServer(false);
    });

}

const sendTokenToServer = (token) => {
    const tokenRef = db.doc(`tokens/${token}`)
    return tokenRef.set({ token: token })
}

const updateUIForPushEnabled = (currentToken) => {
    console.log(`New token ${currentToken}`);
}

export {
    messaging,
    getToken,
    db,
    sendTokenToServer,
    firebase,
}