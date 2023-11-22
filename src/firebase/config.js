import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAsELJ2cAmrxJh0cF8MUAEcrttqCYDOzTs",
  authDomain: "finanzas-c798e.firebaseapp.com",
  projectId: "finanzas-c798e",
  storageBucket: "finanzas-c798e.appspot.com",
  messagingSenderId: "840489082598",
  appId: "1:840489082598:web:6f4eb0cce2a24d03632527",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
//config auht and store
export const FirebaseAuth = getAuth(FirebaseApp);
export const FireStoreDb = getFirestore(FirebaseApp);
