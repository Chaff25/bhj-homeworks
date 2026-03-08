const modal = document.getElementById('subscribe-modal');
const closeBtn = document.querySelector('.modal__close');

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    const parts = cookie.split('=');
    if (parts[0] === name) {
      return parts[1];
    }
  }
  return null;
}

if (!getCookie('modalClosed')) {
  modal.classList.add('modal_active');
}

closeBtn.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  document.cookie = 'modalClosed=true';
});