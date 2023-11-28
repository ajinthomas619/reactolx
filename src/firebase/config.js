import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// ... other necessary imports

const firebaseConfig = {
    apiKey: "AIzaSyDOOGqSe0c6cYiIBEghhxb4JGofA0TR5sY",
    authDomain: "olx-clone-549ae.firebaseapp.com",
    projectId: "olx-clone-549ae",
    storageBucket: "olx-clone-549ae.appspot.com",
    messagingSenderId: "691714361652",
    appId: "1:691714361652:web:6c8c201d5851d74b53bd61",
    measurementId: "G-C9CEXPV7VZ"
  };

export default firebase.initializeApp(firebaseConfig);