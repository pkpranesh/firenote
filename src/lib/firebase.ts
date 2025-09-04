// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv2czI3GfKrafM6Gvfcrr7A9339auwD1k",
  authDomain: "notenest-9ec09.firebaseapp.com",
  projectId: "notenest-9ec09",
  storageBucket: "notenest-9ec09.firebasestorage.app",
  messagingSenderId: "533923202610",
  appId: "1:533923202610:web:54fad4646bce34eb531e2b",
  measurementId: "G-WRQ57P3LZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

export {db};
