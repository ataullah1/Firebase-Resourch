// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCrqXcCA1E6vvgtJQFozPtdy2MzPaPV8DI',
  authDomain: 'snowy-practices-4.firebaseapp.com',
  projectId: 'snowy-practices-4',
  storageBucket: 'snowy-practices-4.appspot.com',
  messagingSenderId: '1047290060795',
  appId: '1:1047290060795:web:74cfd7535589501f35755e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
