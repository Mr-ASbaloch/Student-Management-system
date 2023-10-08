import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDNQwPxtBBl6BAwOACmh6-Dv6Cp_xGMlqg",
  authDomain: "hackathon-db0db.firebaseapp.com",
  projectId: "hackathon-db0db",
  storageBucket: "hackathon-db0db.appspot.com",
  messagingSenderId: "754596691705",
  appId: "1:754596691705:web:4c1c02125b20272c54ec28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const storage = getStorage(app);

export const db = getFirestore (app)


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
