import { signIn, initSignIn, signOutAuth } from './signIn.js';
import { initNavbar } from './initNavbar.js';
import { handleSubmit } from './upload.js';
import { handlePreview } from './preview.js';

$(() => {
  initNavbar();
  $('.add_blog_btn').on('click', () => handleSubmit());
  $('.preview_blog_btn').on('click', () => handlePreview());
  $('.navbar-sign_out_btn').on('click', () => signOutAuth());

  initSignIn();

  $('.login_btn').on('click', e => {
    e.preventDefault();
    signIn($('#login_email').val().trim(), $('#login_password').val().trim());
  });
});
