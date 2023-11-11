import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_CLIENT_KEY,
  authDomain: process.env.FIREBASE_CLIENT_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_CLIENT_PROJECT,
  storageBucket: process.env.FIREBASE_CLIENT_STORAGE,
  messagingSenderId: process.env.FIREBASE_CLIENT_MESSAGE,
  appId: process.env.FIREBASE_CLIENT_APP_ID,
  measurementId: process.env.FIREBASE_CLIENT_MEANSUREMENT,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
