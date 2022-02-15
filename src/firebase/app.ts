import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, FacebookAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'redux-firebase-c9ea8.firebaseapp.com',
  projectId: 'redux-firebase-c9ea8',
  storageBucket: 'redux-firebase-c9ea8.appspot.com',
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

export let app: FirebaseApp;

if (getApps().length) {
  app = getApp();
} else {
  app = initializeApp(firebaseConfig);
}

export const auth = getAuth();
export const provider = new FacebookAuthProvider();
export const db = getFirestore();
