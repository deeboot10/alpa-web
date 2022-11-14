// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXfTlXqSU18MATsiPyi6eGm3TJ9ya15XQ",
  authDomain: "alpa-911d1.firebaseapp.com",
  projectId: "alpa-911d1",
  storageBucket: "alpa-911d1.appspot.com",
  messagingSenderId: "525702261272",
  appId: "1:525702261272:web:9de5c072f895a71ffab16d",
  measurementId: "G-MTN5NHLWTK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
