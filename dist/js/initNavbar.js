export const initNavbar = () => {
    const navbarName = $('.navbar-username');
    const fakeUsername = 'THIS IS A FAKE USERNAME';

    if ("userIsLoggedIn") {
        navbarName.text(fakeUsername ?? 'Error');
    } else {
        navbarName.text('Not Signed In');
        //This is a change
    }
};
