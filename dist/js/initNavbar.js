export const initNavbar = () => {
  const navbarName = $('.navbar-username');
  const fakeUsername = 'THIS IS A FAKE USERNAME';

  navbarName.text(fakeUsername ?? 'Not Signed in');
};
