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
        e.target.lastElementChild.classList.toggle('text-dark');
        e.target.lastElementChild.classList.remove('text-warning');
        return showAlert('error', "Tanlanganlardan o'chirildi");
      }
      if (res.ok) {
        e.target.lastElementChild.classList.toggle('text-warning');
        e.target.lastElementChild.classList.remove('text-dark');
        showAlert('success', "Tanlangan e'lonlarga saqlandi!");
      }
    } catch (err) {
      showAlert('error', err.response.data.message);
    }
  }),
);
const myCommentBtn = document.querySelectorAll('#myComment');

myCommentBtn.forEach(elem => {
  elem.addEventListener('submit', async e => {
    try {
      e.preventDefault();
      const comment = e.target.firstElementChild.firstElementChild.value;
      const productType = e.target.firstElementChild.nextElementSibling.value;
      const productId = e.target.lastElementChild.previousElementSibling.value;
      const res = await fetch(`/user/addComment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment, productType, productId }),
      });

      const data = await res.json();
      if (data.msg === 'empty body') {
        return showAlert('error', `Komment yozilmadi!`);
      }
      if (res.status == 400) {
        e.target.firstElementChild.firstElementChild.value = '';
        return showAlert('error', `Sizda ushbu e'longa komment qoldirilgan`);
      }
      if (res.ok) {
        showAlert('success', "Komment muvaffaqqiyatli qo'shildi!");
        location.assign(`/products/${productId}?productType=${productType}`);
      }
    } catch (err) {
      showAlert('error', 'Xatolik');
    }
  });
});

const deleteCommentBtn = document.querySelectorAll('.deleteComment');

deleteCommentBtn.forEach(elem => {
  elem.addEventListener('submit', async e => {
    e.preventDefault();
    const commentId = e.target.firstElementChild.value;
    const prodId = e.target.lastElementChild.previousElementSibling.value;
    const productType = e.target.firstElementChild.nextElementSibling.value;
    const res = await fetch(`/user/deleteComment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ commentId, prodId, productType }),
    });
    if (res.ok) {
      e.target.parentElement.parentElement.parentElement.remove();
    }
  });
});

const myDelFavBtn = document.querySelectorAll('#deleteFav');
myDelFavBtn.forEach(elem => {
  elem.addEventListener('submit', async e => {
    try {
      e.preventDefault();
      console.log(e);
      const prodId = e.target.firstElementChild.value;
      const res = await fetch(`/user/deleteFavourite`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prodId: prodId }),
      });
      if (res.ok) {
        e.target.parentElement.parentElement.remove();
        showAlert('error', "Tanlangan e'lonlardan o'chirildi!");
      }
    } catch (err) {
      showAlert('error', err.response.data.message);
    }
  });
});
