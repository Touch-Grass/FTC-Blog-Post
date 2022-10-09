import { initNavbar } from './initNavbar.js';
import { signIn, auth, signUp } from './firebase.js';

export const handleSignIn = () => {
    console.log('Sign in');
    // Todo: Add firebase signing in an error catching.
};

export const bypassSignIn = () => {
    const notLoggedIn = $('.not_logged_in');
    const loggedIn = $('.logged_in');
    const signOutBtn = $('.navbar-sign_out_btn');

    notLoggedIn.css('display', 'none');
    loggedIn.css('display', 'block');
    signOutBtn.removeClass('grayedOut');
    initNavbar();
};

const signUpAuth = (email, password) => {
    // Sign up with firebase auth
    signUp(auth, email, password)
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

const signInAuth = (email, password) => {
    console.log('Sign in auth');
    signIn(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log(user, 'Signed in');
            document.write('TEST');
        })
        .catch(error => {
            throw new Error(error.message);
        });
};

// signInAuth('test@gmail.com', '123456');
signUpAuth('test123@gmail.com');
