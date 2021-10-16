import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0FRvxk3iiz1NfdRNptozMgmE7vvKGPh4",
  authDomain: "pokemon-app-a2d55.firebaseapp.com",
  projectId: "pokemon-app-a2d55",
  storageBucket: "pokemon-app-a2d55.appspot.com",
  messagingSenderId: "727376208543",
  appId: "1:727376208543:web:e38f10c9cbebc43160b8aa"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


export {db}