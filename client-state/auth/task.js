const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');

const savedId = localStorage.getItem('user_id');
if (savedId) {
  showWelcome(savedId);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch('https://students.netoservices.ru/nestjs-backend/auth', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        localStorage.setItem('user_id', data.user_id);
        showWelcome(data.user_id);
      } else {
        alert('Неверный логин/пароль');
      }

      form.reset();
    });
});

function showWelcome(id) {
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  userIdSpan.textContent = id;
}