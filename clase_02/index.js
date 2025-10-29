

/* 
    COERCION DE TIPOS DE DATO 

    Hay circunstancias donde a veces intentamos realizar una operacion media 
    rara como por ejemplo (3 * "hola"). ¿Que hace JS en casos como este?

    1- Tira error?
    2- Informa que hay algun valor invalido?
    3- Intenta resolver de alguna manera?

    Cuando tenemos un + si hay una cadena (string) involucrado, ese operador 
    se convierte en un operador de concatenacion.
    Pero... con el de * no sucede lo mismo. Solo puede multiplicar, y se supone
    que solo se deberia poder multiplicar numbers.
*/


// const numero = 11
// const uno = "1"

// console.log(numero + uno)
// console.log(numero - uno)


/* 
    ESTRUCTURAS DE CONTROL DE FLUJO 

    Son aquellas que nos permiten realizar preguntas y en base a la respuesta elegimos un camino u otro.

    En pocas palabras controlan el flujo de un algoritmo.
*/

// var llueve = false;

// Caso excluyente
// Llueve seria una condicion, por que estoy preguntando ¿Llueve?
// if(llueve) {
//     console.log("Voy a hacer deporte")
// } else {
//     console.log("Me quedo jugando lolcito")
// }

// Caso no excluyente
// var lunes = false;
// var viernes = false;
// var sabado = false;

// if(lunes || sabado){
//     console.log("Miro una pelicula a la noche")
// }
// if(viernes || sabado){
//     console.log("Me como una pizza")
// }


// Casos con multiples condiciones
// var numero = 10;

// if(numero > 10){
//     console.log("Numero es mayor que 10")
// } else if(numero < 10){
//     console.log("Numero es menor que 10")
// } else {
//     console.log("Numero es igual a 10")
// }




// SWITCH CASE 
// Es como un formato de maquina expendedora

// var producto = 1;

// switch(producto){
//     case 1:
//         console.log("Te");
//         break;
//     case 2:
//         console.log("Cafe");
//         break;
//     case 3: 
//         console.log("Agua");
//         break;
//     case 4:
//         console.log("Energinzante");
//         break;
//     default:
//         console.log("Caramelo media hora");
// }


/* 
    BUCLES O CICLOS

    Son un conjunto de estructuras de repeticion.

    1. while (mientras)
    2. do while (hacer mientras)
    3. for (para)
*/

var contador = 0; // variable inicial

while(contador < 5){ // condicion
    contador++ // incrementador
    console.log(contador) 
}

// var edad;

do {
    edad = prompt("Ingrese una edad: ")
} while (edad < 18);

// variable incial / condicion / incrementador
for (var contador = 0; contador < 5; contador++) {
    console.log(contador) 
}