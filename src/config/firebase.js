// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgoepDbnG1Zd97x5ibUnqqQaFjdeZF2Sc",
  authDomain: "auth-ecommerce-store.firebaseapp.com",
  projectId: "auth-ecommerce-store",
  storageBucket: "auth-ecommerce-store.firebasestorage.app",
  messagingSenderId: "198394280294",
  appId: "1:198394280294:web:86d783f7f23f7ce471b0a7",
  measurementId: "G-JFJBN2N76X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
const analytics = getAnalytics(app);