var btnMenu = document.querySelector('.menu__btn');
var cabecera = document.querySelector('header');
var menu = document.querySelector('.header__menu');
btnMenu.addEventListener('click', function (event) {
    cabecera.classList.toggle('verMenu')
    menu.classList.toggle('header__menu--opacity')
})

/* recoger datos de formulario*/
let formulario = document.querySelector('.formulario');
//let formulario = document.forms[0];
formulario.addEventListener('submit', (ev) => {
    ev.preventDefault();
    alert(formulario.name.value)
    return false
})