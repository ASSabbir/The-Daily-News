// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH6-QwlXXyri7iYNck9btUblxOP5Zd3m8",
  authDomain: "daily-news-6dcc0.firebaseapp.com",
  projectId: "daily-news-6dcc0",
  storageBucket: "daily-news-6dcc0.appspot.com",
  messagingSenderId: "334757333779",
  appId: "1:334757333779:web:a3872546b8147d37ac68e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);