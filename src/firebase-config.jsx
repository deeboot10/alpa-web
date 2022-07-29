// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM7kqlk9h22hxt29_v1XX4HsEm4hKhU0w",
  authDomain: "alpa-4944d.firebaseapp.com",
  projectId: "alpa-4944d",
  storageBucket: "alpa-4944d.appspot.com",
  messagingSenderId: "960090789102",
  appId: "1:960090789102:web:3daf07663c190c22130fff",
  measurementId: "G-Q8FTKL99K8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
