// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/auth"
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBlscthkhUwUO1-7_kX8-gNibKcOCy8P4",
  authDomain: "todo-react-a7d73.firebaseapp.com",
  projectId: "todo-react-a7d73",
  storageBucket: "todo-react-a7d73.appspot.com",
  messagingSenderId: "637380628106",
  appId: "1:637380628106:web:abf817c2d1439b1b8e6773"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}
export default firebase;