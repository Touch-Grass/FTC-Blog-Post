export const handleSignIn = () => {
  console.log('Sign in');
  // Todo: Add firebase signing in an error catching.
};

export const bypassSignIn = () => {
  const loggedIn = $('.not_logged_in');
  const notLoggedIn = $('.logged_in');

  notLoggedIn.css('display', 'none');
  loggedIn.css('display', 'block');
};
