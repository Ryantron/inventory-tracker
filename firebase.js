// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLJh0P2-9Kaq_JNixr1wFDeHYuJwHhik0",
  authDomain: "inventory-management-71fd5.firebaseapp.com",
  projectId: "inventory-management-71fd5",
  storageBucket: "inventory-management-71fd5.appspot.com",
  messagingSenderId: "702820564326",
  appId: "1:702820564326:web:157fcfea020cc975d6dca7",
  measurementId: "G-KMQM5XPP9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};