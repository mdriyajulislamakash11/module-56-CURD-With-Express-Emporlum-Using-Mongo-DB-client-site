// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUONd7l_ISuv-BdZ9a4kKCJrS1hxSDG58",
  authDomain: "coffee-shop-ee00c.firebaseapp.com",
  projectId: "coffee-shop-ee00c",
  storageBucket: "coffee-shop-ee00c.firebasestorage.app",
  messagingSenderId: "516871142135",
  appId: "1:516871142135:web:ee0d8966a8bc2e87bb31f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
