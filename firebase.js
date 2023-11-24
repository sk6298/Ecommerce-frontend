// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_KEY,
  authDomain: "ecommerce-32ffa.firebaseapp.com",
  projectId: "ecommerce-32ffa",
  storageBucket: "ecommerce-32ffa.appspot.com",
  messagingSenderId: "702026166035",
  appId: "1:702026166035:web:b31ccb9acf9eec1cb8b4e6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);