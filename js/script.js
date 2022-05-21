const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  hamburger.toggle.remove('hide');
  navMenu.toggle.remove('hide');
});

document.querySelectorAll('.nav_link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  hamburger.toggle.remove('hide');
  navMenu.toggle.remove('hide');
}));
