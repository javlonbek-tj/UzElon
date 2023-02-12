let drop = document.querySelector('.drop');
let drop2 = document.querySelector('.drop2');

document.querySelector('#user_btn').addEventListener('click', () => {
  drop.classList.toggle('active');
});

document.querySelector('#user_footer_btn').addEventListener('click', () => {
  drop2.classList.toggle('active');
});

drop.addEventListener('click', () => {
  drop.classList.remove('active');
});

drop2.addEventListener('click', () => {
  drop2.classList.remove('active');
});

function previewBeforeUpload(id) {
  document.querySelector('#' + id).addEventListener('change', function (e) {
    if (e.target.files.length == 0) {
      return;
    }
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);
    document.querySelector('#' + id + '-preview img').src = url;
  });
}

previewBeforeUpload('file-1');
previewBeforeUpload('file-2');
previewBeforeUpload('file-3');
