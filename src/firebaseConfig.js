// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSFeWlZ3ydgrHND7gu9Vgl7avG5reC1ao",
  authDomain: "fir-practice-3e049.firebaseapp.com",
  projectId: "fir-practice-3e049",
  storageBucket: "fir-practice-3e049.appspot.com",
  messagingSenderId: "1089269832978",
  appId: "1:1089269832978:web:a73aed9b4455b65bb0a7cb",
  measurementId: "G-LMG7B99SQP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app); 

