import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Config Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_APP_GOOGLE_API_KEY, 
  authDomain: process.env.NEXT_APP_AUTH_DOMAIN,
  projectId: process.env.NEXT_APP_PROJECT_ID,
  storageBucket: process.env.NEXT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_APP_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_APP_APP_ID,
};

// Initialize the Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth, storage };
