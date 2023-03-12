// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "linkedin-clone-a8efd.firebaseapp.com",
  projectId: "linkedin-clone-a8efd",
  storageBucket: "linkedin-clone-a8efd.appspot.com",
  messagingSenderId: "2867690559",
  appId: "1:2867690559:web:c7e8ae421c9b9a00e08c8a",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
