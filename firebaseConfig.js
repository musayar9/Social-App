// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {FIREBASE_API_KEY, FIREBASE_APP_ID} from "@env"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "social-app-25035.firebaseapp.com",
  projectId: "social-app-25035",
  storageBucket: "social-app-25035.firebasestorage.app",
  messagingSenderId: "1064215810856",
  appId: FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
