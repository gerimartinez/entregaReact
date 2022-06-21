// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw7SVmO12GzetDRSiOdyB-JrZDVeMbbsg",
  authDomain: "armon-react.firebaseapp.com",
  projectId: "armon-react",
  storageBucket: "armon-react.appspot.com",
  messagingSenderId: "576802487811",
  appId: "1:576802487811:web:d09bfa3444b4882ad19836"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)