var btnMenu = document.querySelector('.menu__btn');
var menuPrincipal = document.querySelector('header');
btnMenu.addEventListener('click', function (event) {
    menuPrincipal.classList.add('verMenu')
})