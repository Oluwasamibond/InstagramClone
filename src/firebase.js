import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB4ciXKtNFkdO2YuvmahRHG6mXC0z3ko8c",
  authDomain: "instagram-clone-292ca.firebaseapp.com",
  projectId: "instagram-clone-292ca",
  storageBucket: "instagram-clone-292ca.appspot.com",
  messagingSenderId: "253018299036",
  appId: "1:253018299036:web:02d756b01bf428f6162b59"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();