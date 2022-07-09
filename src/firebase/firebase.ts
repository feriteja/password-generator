// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNFnG3ReA76bVmJvrWfBVWC-amIQ5cqks",
  authDomain: "project-clone-d291a.firebaseapp.com",
  databaseURL:
    "https://project-clone-d291a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-clone-d291a",
  storageBucket: "project-clone-d291a.appspot.com",
  messagingSenderId: "967035871012",
  appId: "1:967035871012:web:ee5c8cc93f9cec5189ddb1",
  measurementId: "G-QD2H2MHQRV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
