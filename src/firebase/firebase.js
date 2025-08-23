// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0y598wxrrdpcW0k4CICXrKr3fZh-F4Mg",
  authDomain: "charlie-marie-website.firebaseapp.com",
  projectId: "charlie-marie-website",
  storageBucket: "charlie-marie-website.firebasestorage.app",
  messagingSenderId: "745816468214",
  appId: "1:745816468214:web:3fd2742fc995fb9f765ad7",
  measurementId: "G-X2DT8E3BGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);