import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcyFTDGdv0eAJyuH0zdJkbVe7pnxfWPNM",
  authDomain: "toddle-ba2d0.firebaseapp.com",
  projectId: "toddle-ba2d0",
  storageBucket: "toddle-ba2d0.appspot.com",
  messagingSenderId: "257060570050",
  appId: "1:257060570050:web:0b7f0ac22ccc9931ea4c5b",
  measurementId: "G-7JV3F2KXR2",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, firestore, storage };
