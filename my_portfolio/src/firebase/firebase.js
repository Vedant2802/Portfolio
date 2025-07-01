// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA8JIvkQWNO169q9rWiJJUx6od7OPdhE4",
  authDomain: "portfolio-cc59a.firebaseapp.com",
  projectId: "portfolio-cc59a",
  storageBucket: "portfolio-cc59a.firebasestorage.app",
  messagingSenderId: "520586150310",
  appId: "1:520586150310:web:299040e0fc503d64a38f67",
  measurementId: "G-NDWDPFN531",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
