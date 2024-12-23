// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1xYeoq3Lr5CnyMYL-_HZFzeUu68YmTa4",
  authDomain: "emailcontactapp-a515c.firebaseapp.com",
  databaseURL: "https://emailcontactapp-a515c-default-rtdb.firebaseio.com",
  projectId: "emailcontactapp-a515c",
  storageBucket: "emailcontactapp-a515c.firebasestorage.app",
  messagingSenderId: "17884870472",
  appId: "1:17884870472:web:3757f5f461968120e6e57d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;