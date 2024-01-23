// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpSxIwe52qwckzGbo4JpFY4lpn_FIfDiU",
  authDomain: "netflix-gpt-6fadf.firebaseapp.com",
  projectId: "netflix-gpt-6fadf",
  storageBucket: "netflix-gpt-6fadf.appspot.com",
  messagingSenderId: "95936956775",
  appId: "1:95936956775:web:dcaf31fc7f849658d1c7c2",
  measurementId: "G-76YEB71ZLD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
