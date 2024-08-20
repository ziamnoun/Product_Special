// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcQZD_lvpWBiJT4ZVhQvYslP3k39pQReg",
  authDomain: "product-86c39.firebaseapp.com",
  projectId: "product-86c39",
  storageBucket: "product-86c39.appspot.com",
  messagingSenderId: "836803353873",
  appId: "1:836803353873:web:de07e613dc2ec2bbdbc0b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;