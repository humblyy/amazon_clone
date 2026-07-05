
import { initializeApp } from "firebase/app";
 import { getFirestore } from "@firebase/firestore";
 import { getAuth } from "firebase/auth";
 


    // import {
    //   getAuth,
    //   signOut,
    //   signInWithEmailAndPassword,
    //   createUserWithEmailAndPassword,
    // } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "clone-53c46.firebaseapp.com",
  projectId: "clone-53c46",
  storageBucket: "clone-53c46.firebasestorage.app",
  messagingSenderId: "516170156024",
  appId: "1:516170156024:web:541280451e95ed7235780d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)