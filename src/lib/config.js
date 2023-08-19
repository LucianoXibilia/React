
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
//import {getFirestore} from `firebase/Firestore`

const firebaseConfig = {
  apiKey: "AIzaSyASSZVjXUhq5XaUldJYQoM3QlVET3-1Za8",
  authDomain: "reactcurso-7ab81.firebaseapp.com",
  projectId: "reactcurso-7ab81",
  storageBucket: "reactcurso-7ab81.appspot.com",
  messagingSenderId: "151214907736",
  appId: "1:151214907736:web:0c8da258b724e5dac2052d",
  measurementId: "G-10PWDTF2N4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
