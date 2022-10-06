import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//add this
//npm install firebase@9.11.0 --save
