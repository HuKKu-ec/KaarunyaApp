// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBkd5SEnQ5gPXrjOYyWX74ul7XOHQU-vAA",
  authDomain: "kaarunya-37427.firebaseapp.com",
  projectId: "kaarunya-37427",
  storageBucket: "kaarunya-37427.appspot.com",
  messagingSenderId: "433751111642",
  appId: "1:433751111642:web:8d1c4cba60c4088719f2e3",
  measurementId: "G-19N50BF4G3"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);