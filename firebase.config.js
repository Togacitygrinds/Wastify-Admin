import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Config Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXkeG76BbwB6gP52auLX2GDzO51N_f0ak",
  authDomain: "wastify-ec6f3.firebaseapp.com",
  projectId: "wastify-ec6f3",
  storageBucket: "wastify-ec6f3.appspot.com",
  messagingSenderId: "1031753258366",
  appId: "1:1031753258366:web:5dacd0a2293de8406c8f2f",
};

// Initialize the Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth, storage };

{
  /*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXkeG76BbwB6gP52auLX2GDzO51N_f0ak",
  authDomain: "wastify-ec6f3.firebaseapp.com",
  projectId: "wastify-ec6f3",
  storageBucket: "wastify-ec6f3.appspot.com",
  messagingSenderId: "1031753258366",
  appId: "1:1031753258366:web:5dacd0a2293de8406c8f2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/
}
