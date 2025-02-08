
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; 


const firebaseConfig = {
    apiKey: "AIzaSyB1UECDDIC2NZWD7vd-m6QfRk7iAaiaMn8",
    authDomain: "workout-plan-app-3a611.firebaseapp.com",
    projectId: "workout-plan-app-3a611",
    storageBucket: "workout-plan-app-3a611.firebasestorage.app",
    messagingSenderId: "377804588010",
    appId: "1:377804588010:web:9bcd35425be6c8a2cee893",
    measurementId: "G-EJVD86XWN7"
};

const app = initializeApp(firebaseConfig); 
const auth = getAuth(app); 

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
