// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { getMessaging } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyBIdcZQ4wj1MzMUZUoc8DkHqfXdVfrvO1I",
  authDomain: "testing-notications.firebaseapp.com",
  projectId: "testing-notications",
  storageBucket: "testing-notications.appspot.com",
  messagingSenderId: "95654281130",
  appId: "1:95654281130:web:10069a3b65aabe41e0b5d3",
  measurementId: "G-JEL77HT91X"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);




