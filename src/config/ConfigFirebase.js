// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAal1FnGU3pKif8_wnJwzMzPKRGAlEAIf0",
  authDomain: "urlife-ecommerce.firebaseapp.com",
  projectId: "urlife-ecommerce",
  storageBucket: "urlife-ecommerce.appspot.com",
  messagingSenderId: "863973749198",
  appId: "1:863973749198:web:ae7f563a7cd87e4b90fb9f",
  measurementId: "G-T5360HBNY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)