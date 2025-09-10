// src/firebase.js (add messaging)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getMessaging, getToken } from "firebase/messaging";

// Replace these with your firebase project config
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_APIKEY",
  authDomain: "YOUR_FIREBASE_AUTHDOMAIN",
  projectId: "YOUR_FIREBASE_PROJECTID",
  storageBucket: "YOUR_FIREBASE_STORAGEBUCKET",
  messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",
  appId: "YOUR_FIREBASE_APPID",
  databaseURL: "https://YOUR_PROJECT.firebaseio.com"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
export const messaging = getMessaging(app);

// Request and store the FCM token
export const requestPermissionAndGetToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {vapidKey: "YOUR_VAPID_KEY"});
      console.log("FCM Token:", token);
      // You can save this token to Firestore to send messages to this device later
      return token;
    } else {
      console.log('Permission not granted for notifications.');
    }
  } catch (error) {
    console.error('An error occurred while retrieving token. ', error);
  }
};
