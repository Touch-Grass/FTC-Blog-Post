import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-analytics.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-database.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDrMNSenT5Bfe8B5sDahRxoJvRbC99hFxQ',
  authDomain: 'ftc-blog.firebaseapp.com',
  projectId: 'ftc-blog',
  storageBucket: 'ftc-blog.appspot.com',
  messagingSenderId: '826380845444',
  appId: '1:826380845444:web:43b07b533e6e6236c19dd1',
  measurementId: 'G-3Z3F33JTNK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase();
export const auth = getAuth(app);
