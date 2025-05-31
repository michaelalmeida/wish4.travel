import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_CLIENT_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_CLIENT_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_CLIENT_PROJECT,
  storageBucket: import.meta.env.VITE_FIREBASE_CLIENT_STORAGE,
  messagingSenderId: import.meta.env.VITE_FIREBASE_CLIENT_MESSAGE,
  appId: import.meta.env.VITE_FIREBASE_CLIENT_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_CLIENT_MEASUREMENT,
};

export const app = initializeApp(firebaseConfig);

export const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_SITE_KEY),
  isTokenAutoRefreshEnabled: true,
});
