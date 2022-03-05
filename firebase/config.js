// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNZ9ltwHZrZmUtaGxmbxypNAP8j8Uu2nM",
  authDomain: "kaarunyaapp-d3660.firebaseapp.com",
  projectId: "kaarunyaapp-d3660",
  storageBucket: "kaarunyaapp-d3660.appspot.com",
  messagingSenderId: "850572459766",
  appId: "1:850572459766:web:bfb9558a4f37ed037cf6d7"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);