const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach(element => {
    const position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom > 0) {
      element.classList.add('reveal_active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();