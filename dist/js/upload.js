import { db } from './firebase.js';
import {
  ref,
  set,
  push,
} from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-database.js';
export const handleSubmit = () => {
  try {
    const dateObj = new Date();
    const month = dateObj.getMonth() + 1; //months from 1-12
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const data = {
      title: $('.title_input').val(),
      description: marked.parse($('.blog_content').val()),
      time: `${month}/${day}/${year}`,
    };

    if (data.title === '' || data.description === '') {
      Toastify({
        text: 'Please fill in all the fields',
        duration: 3500,
        style: {
          background: 'linear-gradient(to right, #d90909, #db341d)',
        },
      }).showToast();
      return;
    }

    if (confirm('Are you sure you want to submit?')) {
      $('.title_input').val('');
      $('.blog_content').val('');

      const postsRef = ref(db, 'posts');
      const newPostRef = push(postsRef);
      set(newPostRef, data).catch(e => {
        Toastify({
          text: `${e}`,
          duration: 5000,
          style: {
            background: 'linear-gradient(to right, #d90909, #db341d)',
          },
        }).showToast();
      });

      Toastify({
        text: 'Successfly added a new blog!',
        duration: 3500,
        style: {
          background: 'linear-gradient(to right, #00b09b, #96c93d)',
        },
      }).showToast();
    }
  } catch (e) {
    Toastify({
      text: `${e}`,
      duration: 5000,
      style: {
        background: 'linear-gradient(to right, #d90909, #db341d)',
      },
    }).showToast();
  }
};
