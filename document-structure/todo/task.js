const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const list = document.getElementById('tasks__list');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const text = input.value.trim();
  if (text === '') {
    return;
  }

  const task = document.createElement('div');
  task.className = 'task';

  task.innerHTML = `
    <div class="task__title">
      ${text}
    </div>
    <a href="#" class="task__remove">&times;</a>
  `;

  const removeBtn = task.querySelector('.task__remove');

  removeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    task.remove();
  });

  list.appendChild(task);

  input.value = '';
});