var btnMenu = document.querySelector('.menu__btn');
var cabecera = document.querySelector('header');
var menu = document.querySelector('header__menu');
btnMenu.addEventListener('click', function (event) {
    /*if (cabecera.classList.contains('verMenu')) {
        cabecera.classList.toggle('verMenu')
    } else {*/
    cabecera.classList.toggle('verMenu')
    menu.classList.toggle('header__menu--opacity')
    //}
})