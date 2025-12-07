const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');

  // Animate hamburger into "X"
  hamburger.classList.toggle('open');
});

