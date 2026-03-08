const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];
    if (!file) return alert('Выберите файл!');

    const formData = new FormData();
    formData.append('file', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);

    xhr.upload.addEventListener('progress', function (e) {
        if (e.lengthComputable) {
            progress.value = e.loaded / e.total;
        }
    });

    xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
            alert('Файл успешно загружен!');
            progress.value = 0; 
        } else {
            alert('Ошибка при загрузке файла.');
        }
    });

    xhr.send(formData);
});