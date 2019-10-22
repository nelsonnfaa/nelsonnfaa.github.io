var btnMenu = document.querySelector('.menu__btn');
var cabecera = document.querySelector('header');
var menu = document.querySelector('.header__menu');
btnMenu.addEventListener('click', function (event) {
    cabecera.classList.toggle('verMenu')
    menu.classList.toggle('header__menu--opacity')
})

/* recoger datos de formulario*/
//let formulario = document.forms[0];
var btnSubmit = document.querySelector('#envia');
btnSubmit.addEventListener('click', (ev) => {
    ev.preventDefault();
    let formulario = document.formularioC;
    console.log(formulario.nombre.value)
    console.log(formulario.direccion.value)
    console.log(formulario.telefono.value)
    console.log(formulario.mensaje.value)
    return false
})