import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_CLIENT_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_CLIENT_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_CLIENT_PROJECT,
  storageBucket: import.meta.env.VITE_FIREBASE_CLIENT_STORAGE,
  messagingSenderId: import.meta.env.VITE_FIREBASE_CLIENT_MESSAGE,
  appId: import.meta.env.VITE_FIREBASE_CLIENT_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_CLIENT_MEANSUREMENT,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
