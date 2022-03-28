import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEuTxaBSVxgMgGad4ErOH_tsDwpvA6qfs",
  authDomain: "disney-clone-f52e2.firebaseapp.com",
  projectId: "disney-clone-f52e2",
  storageBucket: "disney-clone-f52e2.appspot.com",
  messagingSenderId: "751740140933",
  appId: "1:751740140933:web:f3108f601f8a08ad1398ec",
  measurementId: "G-ZJ2FSTJ19X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { db, auth, storage, provider };