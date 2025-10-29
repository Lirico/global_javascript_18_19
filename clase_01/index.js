
// INTRODUCCION A JAVASCRIPT

/* 
    Caracteristicas:
    - JavaScript es un lenguaje de programacion
    - JavaScript NO es lo mismo que Java
    - Nacio en el anio 1995
    - Su creador fue Brendan Eich
    - Cuenta la leyenda de que le encargaron crear el lenguaje en 10 dias (y lo logro)
    - Se creo con el objetivo de darle interactivdad a los sitios web que en aquel entonces eran puro HTML
    - Todos los lenguajes de programacion se usaban para el lado del servidor (backend)
    - JS no nacio con ese objetivo, nacio para usarse del lado del cliente
    - El navegador web solo entiende JS
    - Desde el anio 2008 JS se pudo empezar a usar del lado del servidor
    - En ese anio Ryan Dall creo Node.js 
    - Node.js es un entorno de ejecucion que permite ejecutar JS en el backend
    - Desde entonces JS es el unico lenguaje isomorfico.
    - Es el unico lenguaje con el que podemos hacer una app web o mobile de punta a punta
*/

/* 
    ¿Que puedo hacer con JS?
    - Programar sitios webs
    - Programar app mobile
    - Programar app escritorio
    - Desarrollar videojuegos -> 2D
    - Modelaje 3D
    - Programar placas hardware -> Robotica
    - Programar drones
    - Machine learning -> Require titulo universitado OBLIGATORIO -> Matematicas
    - Ciencia de datos -> Require titulo universitado OBLIGATORIO -> Analista de datos
*/

/* 
    Comando para imprimir en consola -> console.log()

    Ejemplos:
    console.log("It's me mariooooo")
    console.log("Me gusta el pancito")
*/

/* 
    Cuando programamos lo que hacemos en cierto modo es darle ordenes a la computadora.

    La computadora las ordenes las entiende como ingreso o no de pulsos electricos.
    La llegada de un pulso se describe como un numero 1.
    La falta del mismo se describe como un numero 0.
    Una secuencia de pulsos y falta de pulsos se la conoce como secuencia binaria.
    Cada secuencia binaria la manquina la entiende como un dato.

    Ejemplo:
    13 -> 00001101 -> 8 bits

     0    0   0   0  1  0 1 1
    128  64  32  16  8  4 2 1

    Un lenguaje tiene un motor de interpretacion/compilacion
    13 -> compila lenguaje de maquina -> ejecuta
*/

/*
    JS tiene tipos de datos

    Tipos primitivos -> valores simples que se accede a ellos directamente

    Tipos compuesto -> colecciones de valores donde accedemos a los valores por medio de referencias.

    Inicialmente vamos a ver 3 tipos de datos, son los ladrillos basicos:
    number -> 13 / -13 / 13.01 / -13.02 
    string -> cadena de texto -> "hola" / "13"
    boolean -> true/false
    Tambien existen tipos que representan valores vacios:
    null
    undefined

    Cada tipo de dato tiene sus propias caracteristicas

*/

// console.log(13)
// console.log("Hola Analia")
// console.log(true)

// Variable

// contador
// var contador = 0


// console.log(contador = contador + 1) 


// var nombre = "Analia"
// var apellido = "Rivera"

// console.log(nombre + " " + apellido)

// OPERADORES

/* 
    Un valor como 13 es una expresion simple.
    Los operadores permiten realizar acciones combinando o
    evaluando dos valores.
    Permiten converitr 2 expresiones simples en una expresion
    compuesta.
*/

// Operadores aritmeticos -> devuelven un valor numerico
// + (o en este caso una concatenacion)
// -
// *
// / -> Nos da el resultado de la divison
// % -> Nos da el resto de la division -> 5/2 -> 
// incrementador ++
// decrementador --


// Operadores de comparacion -> booleano
// >
// <
// >=
// <=
// === estricta
// == abstracta
// !== estricta
// != abstacta

// console.log(3 === "3") // Evalua valor y tipo
// console.log(3 == "3") // valor

// Operadores logicos -> booleano 
// Y -> and -> &&
// O -> or -> ||
// negacion -> not -> !

// ¿Que diferencia hay entre null y undefined y para que sirven?

// El objetivo del null es representar una inexistencia temporal
// var color = null;

// color = "rojo"

// console.log(color)

// El undefined es la inexistencia por defecto.

// var a;

// console.log(a)


