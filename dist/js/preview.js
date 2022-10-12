export const handlePreview = () => {
  const preview = document.createElement('div');
  const closeBtn = document.createElement('button');

  preview.classList.add('preview');

  preview.innerHTML = `
    <div class="preview_box">
      ${marked.parse($('.blog_content').val()) || 'Empty'}
    </div>
  `;

  $('body').append(preview);
  closeBtn.classList.add('close_btn');
  closeBtn.innerHTML = 'Close';
  preview.appendChild(closeBtn);
  $('.close_btn').on('click', () => $('.preview').remove());
};
