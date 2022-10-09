export const initNavbar = username => {
  const navbarName = $('.navbar-username');

  navbarName.text(username ?? 'Not Signed in');
};
