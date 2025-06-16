// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// ✅ Your existing config
const firebaseConfig = {
  apiKey: "AIzaSyBmDdHW3f2VmLqrx4LczJ86xnXgSCpVJ-s",
  authDomain: "rhymygy.firebaseapp.com",
  projectId: "rhymygy",
  storageBucket: "rhymygy.firebasestorage.app",
  messagingSenderId: "357764613278",
  appId: "1:357764613278:web:e8971209f8092c755d278f",
  measurementId: "G-JC8H5D8ZF7"
};

// 🔥 Initialize Firebase App + Services
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 👇 Export for use in Login.jsx
export { auth, provider };
