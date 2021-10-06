const menuButton = document.querySelector('.nav__button-menu');
const mobileMenu = document.querySelector('.h__mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('show-menu');
});
