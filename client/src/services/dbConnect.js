import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// console.log(process.env);

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBLsY6_igehSL1jNBbwQhLcNL3XBJhV7Zc",
  authDomain: "cloud-files-db-test.firebaseapp.com",
  projectId: "cloud-files-db-test",
  storageBucket: "cloud-files-db-test.appspot.com",
  messagingSenderId: "208043043761",
  appId: "1:208043043761:web:a13b6f5775a6fb72f4ab90",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
