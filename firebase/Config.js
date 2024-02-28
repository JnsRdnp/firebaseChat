// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, query, onSnapshot } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe8CK1eUb42zKMTgYtZlr3X_h0lDEdVI0",
  authDomain: "chatti-d1809.firebaseapp.com",
  projectId: "chatti-d1809",
  storageBucket: "chatti-d1809.appspot.com",
  messagingSenderId: "891891781928",
  appId: "1:891891781928:web:2687d6213a87fe144fc01d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const firestore = getFirestore()

const MESSAGES = 'messages'

export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    query,
    onSnapshot,
    MESSAGES

};
