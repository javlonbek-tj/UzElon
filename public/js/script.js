let drop = document.querySelector('.drop');
let drop2 = document.querySelector('.drop2');

/* drop active */

document.querySelector('#user_btn').addEventListener('click', () => {
  drop.classList.toggle('active');
  console.log(1);
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

/* my favourite */

const hideAlert = () => {
  const el = document.querySelector('.alert');
  if (el) {
    el.parentElement.removeChild(el);
  }
};

// type is 'success' or 'error'
const showAlert = (type, msg, time = 2) => {
  hideAlert();
  const markup = `<div class="alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
  window.setTimeout(hideAlert, time * 1000);
};

const myFavBtn = document.querySelectorAll('#myFav');

myFavBtn.forEach(elem =>
  elem.addEventListener('submit', async e => {
    try {
      e.preventDefault();
      const prodId = e.target.firstElementChild.value;
      const res = await fetch(`/user/myFavourite`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prodId: prodId }),
      });
      if (res.status == 204) {
        e.target.lastElementChild.classList.toggle('text-primary');
        e.target.lastElementChild.classList.remove('text-warning');
        return showAlert('error', "Tanlanganlardan o'chirildi");
      }
      if (res.ok) {
        e.target.lastElementChild.classList.toggle('text-warning');
        e.target.lastElementChild.classList.toggle('text-primary');
        showAlert('success', "Tanlangan e'lonlarga saqlandi!");
      }
    } catch (err) {
      showAlert('error', err.response.data.message);
    }
  }),
);

/* Image upload */
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
