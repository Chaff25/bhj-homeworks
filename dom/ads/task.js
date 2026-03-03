const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
  const cases = rotator.querySelectorAll('.rotator__case');
  let index = 0;

  function rotate() {
    const current = cases[index];
    current.classList.remove('rotator__case_active');

    index++;
    if (index >= cases.length) {
      index = 0;
    }

    const next = cases[index];
    next.classList.add('rotator__case_active');

    if (next.dataset.color) {
      next.style.color = next.dataset.color;
    }

    const speed = next.dataset.speed ? Number(next.dataset.speed) : 1000;

    setTimeout(rotate, speed);
  }

  const firstSpeed = cases[index].dataset.speed ? Number(cases[index].dataset.speed) : 1000;
  setTimeout(rotate, firstSpeed);
});