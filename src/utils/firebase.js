import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, initializeFirestore } from "@firebase/firestore";
import {
  getMessaging,
  isSupported,
  getToken,
  onMessage,
} from "firebase/messaging";
import { notify } from "react-notify-toast";

const firebaseConfig = {
  apiKey: "AIzaSyD3l7LInSkCQog2t6J7X2-Bm9fBza_ijKA",
  authDomain: "ku-view.firebaseapp.com",
  databaseURL: "https://ku-view.firebaseio.com",
  projectId: "ku-view",
  storageBucket: "ku-view.appspot.com",
  messagingSenderId: "77378557282",
  appId: "1:77378557282:web:fde38ce3a21d4fd515883b",
  measurementId: "G-GM0H5HBP4J",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

initializeFirestore(app, {
  timestampsInSnapshots: true,
});

const getMessagingToken = async () => {
  if (isSupported()) {
    try {
      const serviceWorkerRegistration = await navigator.serviceWorker.register(
        `${process.env.PUBLIC_URL}/firebase-messaging-sw.js`
      );
      const currentToken = await getToken(messaging, {
        vapidKey:
          "BDDNlVdwUP39dJEu9rfD7kBEOUvaUXhJkuQqC4Nc4B0P3HtpVl0E_9EXjgCqYp0N0UvO3pqDvCoE8qzoEUdRo_U",
        serviceWorkerRegistration,
      });
      if (currentToken) {
        sendTokenToServer(currentToken);
        updateUIForPushEnabled(currentToken);
      } else {
        console.log(
          "No Instance ID token available. Request permission to generate one."
        );
      }
      onMessage(messaging, (payload) => {
        console.log("Message received. ", payload);
        notify.show(payload.data.body + ", please refresh");
      });
    } catch (error) {
      console.error(error);
    }
  }
};

const sendTokenToServer = (token) => {
  const tokenRef = doc(`tokens/${token}`);
  return tokenRef.set({ token: token });
};

const updateUIForPushEnabled = (currentToken) => {
  console.log(`New token ${currentToken}`);
};

export { messaging, getMessagingToken, sendTokenToServer };
