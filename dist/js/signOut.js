const notLoggedIn = $('.not_logged_in');
const loggedIn = $('.logged_in');
const signOutBtn = $('.navbar-sign_out_btn');
export const handleSignOut = () => {
  notLoggedIn.css('display', 'flex');
  loggedIn.css('display', 'none');
  signOutBtn.addClass('grayedOut');
};
