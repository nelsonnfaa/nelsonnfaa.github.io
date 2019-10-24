var btnMenu = document.querySelector('.menu__btn');
var cabecera = document.querySelector('header');
var menu = document.querySelector('.header__menu');
btnMenu.addEventListener('click', function (event) {
    cabecera.classList.toggle('verMenu')
    menu.classList.toggle('header__menu--opacity')
})
document.querySelectorAll('.header__menu a').forEach(element => {
    element.addEventListener('click', (e) => {
        cabecera.classList.toggle('verMenu')
        menu.classList.toggle('header__menu--opacity')
    })
});

/* recoger datos de formulario*/
//let formulario = document.forms[0];
var btnSubmit = document.querySelector('#envia');
btnSubmit.addEventListener('click', (ev) => {
    ev.preventDefault();
    let formulario = document.formularioC;
    if (formulario.nombre.value.length>4) {
        if (formulario.correo.value.indexOf("@")>3) {
            let datos = ''
            datos += "<br/>Nombre: "+formulario.nombre.value
            datos += "<br/>Correo: "+formulario.correo.value
            datos += "<br/>Teléfono: "+formulario.telefono.value
            datos += "<br/>Mensaje: "+formulario.mensaje.value
            document.querySelector(".resul").innerHTML=datos
        }else{
            alert("Campo Correo incorrecto")
        }
    }else{
        alert("Campo Nombre incorrecto")
    }
   
    return false
})