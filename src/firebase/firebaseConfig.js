// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgZt1ZbToxOAOnh0gd3wBo9n1QlGQ3ku0",
    authDomain: "trendleaders-a31a9.firebaseapp.com",
    projectId: "trendleaders-a31a9",
    storageBucket: "trendleaders-a31a9.appspot.com",
    messagingSenderId: "435800116074",
    appId: "1:435800116074:web:981a9e860af0998ce0b313"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

