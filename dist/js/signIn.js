import { initNavbar } from './initNavbar.js';
import { auth } from './firebase.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js';

const signUpAuth = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
    })
    .catch(error => {
      throw new Error(error.code, error.message);
    });
};

export const signOutAuth = () => {
  signOut(auth)
    .then(() => {
      location.reload();
    })
    .catch(error => {
      throw new Error('Sign out failed', error);
    });
};

export const initSignIn = () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      $('.not_logged_in').css('display', 'none');
      $('.logged_in').css('display', 'block');
      $('.navbar-sign_out_btn').removeClass('grayedOut');
      initNavbar(user.email);
    } else {
      $('.navbar_username').text('Not Signed In');
    }
  });
};

export const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
    })
    .catch(error => {
      throw new Error(error.message);
    });
};
