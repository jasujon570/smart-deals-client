import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA720AWQzSYTi26IheoO-Xkvoe8XfCfaJU",
  authDomain: "smart-deals-555c0.firebaseapp.com",
  projectId: "smart-deals-555c0",
  storageBucket: "smart-deals-555c0.firebasestorage.app",
  messagingSenderId: "804721661403",
  appId: "1:804721661403:web:89771ea6d4dd09ab9d83fe"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);