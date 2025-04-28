

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



  const firebaseConfig = {
    apiKey: "AIzaSyBZacP-YbK2DlUm193_6cDkoZBw1IGrKFU",
    authDomain: "crve-7e13a.firebaseapp.com",
    projectId: "crve-7e13a",
    storageBucket: "crve-7e13a.firebasestorage.app",
    messagingSenderId: "647406716406",
    appId: "1:647406716406:web:26d620f3b8ba957682f3d7"
    };
// Intialize Firebase

if (!firebase.apps.length) {
    firebase.initializeApp (firebaseConfig)
}


export { firebase }