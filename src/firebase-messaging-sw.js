importScripts('https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.13.1/firebase-messaging.js');

const config = {
    apiKey: "AIzaSyCx9A-MgqIp3RyyXbKjZn1V_IuBJTakYV4",
    authDomain: "ikonmaketingapp.firebaseapp.com",
    databaseURL: "https://ikonmaketingapp-default-rtdb.firebaseio.com",
    projectId: "ikonmaketingapp",
    storageBucket: "ikonmaketingapp.appspot.com",
    messagingSenderId: "123597930383",
    appId: "1:123597930383:web:00b94b6a647857dd47d5fa",
    measurementId: "G-H3V2WESK2Q",
  };

firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

self.addEventListener('notificationclick', event => {
  console.log(event)
  return event;
});