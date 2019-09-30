var btnMenu = document.querySelector('.menu__btn');
var menuPrincipal = document.querySelector('header');
btnMenu.addEventListener('click', function (event) {
    alert('hola')
    menuPrincipal.classList.add('verMenu')
})
// btnMenu.classList.add('clasePrueba', 'animacion')