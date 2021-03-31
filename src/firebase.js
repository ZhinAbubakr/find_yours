import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics"

 var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDaQIgxU_BSwBeokkFcN4tIVrKkkz57YWY",
  authDomain: "findyours-eb195.firebaseapp.com",
  projectId: "findyours-eb195",
  storageBucket: "findyours-eb195.appspot.com",
  messagingSenderId: "98252038188",
  appId: "1:98252038188:web:6e67a29b51bb59e5f07189",
  measurementId: "G-T019N9EWTW"
 });

var db = firebaseApp.firestore();

export {db}

