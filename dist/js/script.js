import { handleSignOut } from './signOut.js';
import { handleSignIn, bypassSignIn } from './signIn.js';
import { initNavbar } from './initNavbar.js';
import { db } from './firebase.js';
import { ref, set, push } from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-database.js';
$(() => {
  initNavbar();
  const form = $('.add_blog_form');
  const button = $('.add_blog_btn');
  const signOut = $('.navbar-sign_out_btn');
  const loginForm = $('.login_form');
  const loginBtn = $('.login_btn');

  // Firebase logic
  button.on('click', () => {
    console.log('CLICKED');
    const data = {
      title: $('.title_input').val(),
      description: $('.blog_content').val(),
      time: new Date().toLocaleString(),
    };

    console.log(data.title, data.description, data.content);

    const postsRef = ref(db, 'posts');
    const newPostRef = push(postsRef);
    set(newPostRef, data);
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
