import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.TZ_API_KEY,
  authDomain: 'redux-firebase-c9ea8.firebaseapp.com',
  projectId: 'redux-firebase-c9ea8',
  storageBucket: 'redux-firebase-c9ea8.appspot.com',
  messagingSenderId: process.env.TZ_MESSAGING_SENDER_ID,
  appId: process.env.TZ_APP_ID,
  measurementId: process.env.TZ_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
