
// firebase-messaging-sw.jsx





importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBIdcZQ4wj1MzMUZUoc8DkHqfXdVfrvO1I",
  authDomain: "testing-notications.firebaseapp.com",
  projectId: "testing-notications",
  storageBucket: "testing-notications.appspot.com",
  messagingSenderId: "95654281130",
  appId: "1:95654281130:web:10069a3b65aabe41e0b5d3",
  measurementId: "G-JEL77HT91X"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.error(
    "[firebase-messaging-sw.jsx] Received background message >>>>",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});