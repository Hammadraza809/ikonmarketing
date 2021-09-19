import firebase from "firebase";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCx9A-MgqIp3RyyXbKjZn1V_IuBJTakYV4",
  authDomain: "ikonmaketingapp.firebaseapp.com",
  databaseURL: "https://ikonmaketingapp-default-rtdb.firebaseio.com",
  projectId: "ikonmaketingapp",
  storageBucket: "ikonmaketingapp.appspot.com",
  messagingSenderId: "123597930383",
  appId: "1:123597930383:web:00b94b6a647857dd47d5fa",
  measurementId: "G-H3V2WESK2Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebaseApp.firestore();

const messaging = firebase.messaging();

export { auth, db, messaging };
