// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_API_AUTH_DOMAIN,
  projectId: "orders-c7c44",
  storageBucket: "orders-c7c44.appspot.com",
  messagingSenderId: "707394690168",
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-4JYMREZPQT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
