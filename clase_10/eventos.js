/***** EVENTOS *****/


// const $button = document.querySelector('button');


// const insertarLetra = () => {
//     const $p = document.createElement('p');
    
//     $p.textContent = "A";
    
//     document.body.appendChild($p);
// }

/* 
    Eventos relacionados al mouse
    - onclick (click izquierdo)
    - oncontextmenu (click derecho)
    - onmouseover (pasar el mouse por arriba del elemento)
    - onmouseout (quitar el mouse de arriba del elemento)
    - onscroll (usamos la ruedita del mouse) -> (es evento del window)
    
    Eventos relacionados a formularios 
    - onsubmit (cuando le damos al elemento de submit de un form)
    - onchange (cuando detecta que hicimos cambios en un input)

    Eventos relacionados a la interaccion con el navegador
    - onresize (cuando cambiamos el tamaño de la pantalla)
    - DOMContentLoaded (cuando detecta que recargamos el navegador) (es evento del document)

    Eventos relacionados al teclado
    - onkeypress
    - onkeydown
    - onkeyup
*/

// elemento.addEventListener(evento, funcion)

// $button.addEventListener("click", insertarLetra)

// document.addEventListener("DOMContentLoaded", function() {
//     console.log("Navegador recargado")
// })

// window.addEventListener("scroll", function() {
//     console.log("Holis")
// })

// COUNTER STRIKE
const d = document;
const w = window;
const print = console.log()

// d.addEventListener("click", () => console.log("Bang"))
// d.addEventListener("contextmenu", () => console.log("Amplia mira"))

// window.addEventListener("keypress", (event) => {
//     switch (event.key) {
//         case "a":
//             console.log("Mover izquierda")
//             break;
    
//         case "w":
//             console.log("Mover adelante")
//             break;
    
//         case "s":
//             console.log("Mover atras")
//             break;
    
//         case "d":
//             console.log("Mover derecha")
//             break;
    
//         default:
//             break;
//     }
// })

// FORMULARIO
// const $form = d.querySelector("form");
// const $email = d.querySelector('#form_email') // -> input
// const $password = d.querySelector("#form_password");
// const $emailError = d.querySelector("#email_error");
// const $passwordError = d.querySelector("#password_error");

// $form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     if(!$email.value){
//         $emailError.style.display = "inline-block"
//         return;
//     } else {
//         $emailError.style.display = "none"
//     }
//     if(!$password.value){
//         $passwordError.style.display = "inline-block"
//         return;
//     } else {
//         $passwordError.style.display = "none"
//     }

//     console.log({
//         email: $email.value,
//         password: $password.value
//     })
// })
