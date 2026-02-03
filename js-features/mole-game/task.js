let dead = 0;
let lost = 0;

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function showRandomMole() {
  for (let i = 1; i <= 9; i++) {
    getHole(i).classList.remove('hole_has-mole');
  }
  const randomIndex = Math.floor(Math.random() * 9) + 1;
  getHole(randomIndex).classList.add('hole_has-mole');
}

for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);
  hole.onclick = () => {
    if (hole.classList.contains('hole_has-mole')) {
      dead += 1;
      document.getElementById('dead').textContent = dead;
    } else {
      lost += 1;
      document.getElementById('lost').textContent = lost;
    }
    if (dead === 10) {
      alert('Вы победили!');
      dead = 0;
      lost = 0;
      document.getElementById('dead').textContent = dead;
      document.getElementById('lost').textContent = lost;
    }
    if (lost === 5) {
      alert('Вы проиграли!');
      dead = 0;
      lost = 0;
      document.getElementById('dead').textContent = dead;
      document.getElementById('lost').textContent = lost;
    }
    showRandomMole();
  };
}

showRandomMole();
