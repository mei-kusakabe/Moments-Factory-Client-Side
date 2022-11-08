// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3277N_bx-EaiN5GdbufA8VqhvSdPDDMs",
    authDomain: "moments-factory.firebaseapp.com",
    projectId: "moments-factory",
    storageBucket: "moments-factory.appspot.com",
    messagingSenderId: "602850265598",
    appId: "1:602850265598:web:1ea8e4bd8b5cc2c03018af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;