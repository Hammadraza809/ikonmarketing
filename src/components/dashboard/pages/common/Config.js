import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyB5wxPueT7dBrP247VaSYTuuHH9V-0wFys",
    authDomain: "ikon-mobilechatapp.firebaseapp.com",
    projectId: "ikon-mobilechatapp",
    storageBucket: "ikon-mobilechatapp.appspot.com",
    messagingSenderId: "794954839666",
    appId: "1:794954839666:web:c619370b1f6831452574eb",
    measurementId: "G-5BL9XZFYYQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebaseApp.firestore();

export { auth, db };