const loader = document.getElementById('loader');
const items = document.getElementById('items');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.onload = function () {
  const data = JSON.parse(xhr.response);
  const valutes = data.response.Valute;

  items.innerHTML = '';

  for (let key in valutes) {
    const valute = valutes[key];

    const item = document.createElement('div');
    item.className = 'item';

    item.innerHTML = `
      <div class="item__code">
        ${valute.CharCode}
      </div>
      <div class="item__value">
        ${valute.Value}
      </div>
      <div class="item__currency">
        руб.
      </div>
    `;

    items.appendChild(item);
  }

  loader.classList.remove('loader_active');
};

xhr.send();