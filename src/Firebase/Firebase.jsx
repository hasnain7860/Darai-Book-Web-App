// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBvN63y7sCZc9aEJe_LRO4MpSYC4peIv14",
  authDomain: "darsibook-80dce.firebaseapp.com",
  projectId: "darsibook-80dce",
  storageBucket: "darsibook-80dce.appspot.com",
  messagingSenderId: "858854455165",
  appId: "1:858854455165:web:ae55c0941d541ce0cdfe14",
  measurementId: "G-RQM6BQNCTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imagedb = getStorage(app);
export const database = getFirestore(app);
const analytics = getAnalytics(app);

