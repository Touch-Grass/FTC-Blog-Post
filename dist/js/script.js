import { handleSignOut } from './signOut.js';
import { handleSignIn, bypassSignIn } from './signIn.js';
import { initNavbar } from './initNavbar.js';
$(() => {
  console.log('script.js loaded');
  initNavbar();
  const form = $('.add_blog_form');
  const button = $('.add_blog_button');
  const signOut = $('.navbar-sign_out_btn');
  const loginForm = $('.login_form');
  const loginBtn = $('.login_btn');
  // Firebase logic
  button.on('click', e => {
    try {
      // Todo: send to firebase, then return message.
    } catch (e) {
      alert(e);
      throw new Error(e);
    }
  });

  // Form submiting
  form.on('submit', e => {
    e.preventDefault();
    console.log(marked.parse($('.blog_content').val()));
  });

  signOut.on('click', () => {
    handleSignOut();
    console.log('Sign out');
  });

  loginForm.on('submit', e => {
    e.preventDefault();
    handleSignIn();
  });

  loginBtn.on('click', () => {
    bypassSignIn();
  });
});
