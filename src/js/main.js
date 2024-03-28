import '../scss/style.scss';

const menuBurger = document.querySelector('.header__burger-menu');
const menu = document.querySelector('.header__menu');

menuBurger.addEventListener('click', (event) => {
  menuBurger.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('lock');
})
