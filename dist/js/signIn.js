import { initNavbar } from './initNavbar.js';
import { auth } from './firebase.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js';

// export const handleSignIn = (email, passw) => {
//   console.log('Sign in');
//   signInAuth();
//   // Todo: Add firebase signing in an error catching.
// };

const signUpAuth = (email, password) => {
  // Sign up with firebase auth
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Add user to the database
      const user = userCredential.user;
      console.log(user);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const signOutAuth = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('Sign out successful');
      location.reload();
    })
    .catch(error => {
      // An error happened.
      console.log('Sign out error', error);
    });
};

export const initSignIn = () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log('User is signed in');
      $('.not_logged_in').css('display', 'none');
      $('.logged_in').css('display', 'block');
      $('.navbar-sign_out_btn').removeClass('grayedOut');
      initNavbar(user.email);
    } else {
      $('.navbar_username').text('Not Signed In');
      console.log('No user signed in');
    }
  });
};

export const signIn = (email, password) => {
  console.log(
    'Signing in with firebase! Email: ',
    email,
    ' Password: ',
    password
  );
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
    })
    .catch(error => {
      throw new Error(error.message);
    });
};
