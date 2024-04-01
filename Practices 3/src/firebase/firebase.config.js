// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyANq5VRBMahJzA8vsYie-PtvwMDQlxpygE',
  authDomain: 'snowy-practice-3.firebaseapp.com',
  projectId: 'snowy-practice-3',
  storageBucket: 'snowy-practice-3.appspot.com',
  messagingSenderId: '400965240609',
  appId: '1:400965240609:web:57ab7190cb99e7b2b2a060',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
