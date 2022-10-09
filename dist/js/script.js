import { handleSignOut } from './signOut.js';
import { handleSignIn, bypassSignIn } from './signIn.js';
import { initNavbar } from './initNavbar.js';
import { handleSubmit } from './upload.js';

$(() => {
  initNavbar();
  const button = $('.add_blog_btn');
  const signOut = $('.navbar-sign_out_btn');
  const loginForm = $('.login_form');
  const loginBtn = $('.login_btn');

  button.on('click', () => handleSubmit());
  signOut.on('click', () => handleSignOut());
  loginBtn.on('click', () => bypassSignIn());

  loginForm.on('submit', e => {
    e.preventDefault();
    handleSignIn();
  });
});
