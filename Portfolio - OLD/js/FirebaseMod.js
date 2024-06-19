// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkHcBOzqcng0Irczn2XE_4cOrHq08zk2k",
    authDomain: "portfolio-71593.firebaseapp.com",
    projectId: "portfolio-71593",
    storageBucket: "portfolio-71593.appspot.com",
    messagingSenderId: "118623114495",
    appId: "1:118623114495:web:c88420ef1806e0802ae8ca",
    measurementId: "G-407D9X96Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);