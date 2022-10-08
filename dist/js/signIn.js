import { initNavbar } from './initNavbar';
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
