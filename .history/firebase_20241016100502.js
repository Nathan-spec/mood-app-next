// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.,
  projectId: "broodl-543ac",
  storageBucket: "broodl-543ac.appspot.com",
  messagingSenderId: "52469325325",
  appId: "1:52469325325:web:7d3bb6b75580bd0ce1bf44",
  measurementId: "G-437NNZHC48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);