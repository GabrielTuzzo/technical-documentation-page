const menuDrop = document.querySelector('#menuDrop');
const menu = document.querySelector('#menu');

menuDrop.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuDrop.classList.toggle('active-menu');
})