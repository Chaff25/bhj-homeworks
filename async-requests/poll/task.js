const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.onload = function () {
  const data = JSON.parse(xhr.response);

  const pollId = data.id;
  const title = data.data.title;
  const answers = data.data.answers;

  pollTitle.textContent = title;

  answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.className = 'poll__answer';
    button.textContent = answer;

    button.addEventListener('click', function () {
      alert('Спасибо, ваш голос засчитан!');

      const voteXhr = new XMLHttpRequest();
      voteXhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
      voteXhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      voteXhr.onload = function () {
        const result = JSON.parse(voteXhr.response);

        pollAnswers.innerHTML = '';

        result.stat.forEach(item => {
          const total = result.stat.reduce((sum, el) => sum + el.votes, 0);
          const percent = ((item.votes / total) * 100).toFixed(2);

          const div = document.createElement('div');
          div.textContent = `${item.answer}: ${percent}%`;

          pollAnswers.appendChild(div);
        });
      };

      voteXhr.send(`vote=${pollId}&answer=${index}`);
    });

    pollAnswers.appendChild(button);
  });
};

xhr.send();