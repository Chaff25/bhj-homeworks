const editor = document.getElementById('editor');
const savedText = localStorage.getItem('editorText');
const clearBtn = document.getElementById('clear');

if (savedText) {
  editor.value = savedText;
}

editor.addEventListener('input', () => {
  localStorage.setItem('editorText', editor.value);
});

clearBtn.addEventListener('click', () => {
  editor.value = '';
  localStorage.removeItem('editorText');
});