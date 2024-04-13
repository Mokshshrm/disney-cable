import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyD5XmCqE0XzR63kEfw3GHyZg3AW4FaiKzI",
    authDomain: "disneyplus-cable.firebaseapp.com",
    projectId: "disneyplus-cable",
    storageBucket: "disneyplus-cable.appspot.com",
    messagingSenderId: "460508816718",
    appId: "1:460508816718:web:7f5264b4038baad9cb6a1f",
    measurementId: "G-6TJQ0DC12S"
};


const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(firebaseApp);
