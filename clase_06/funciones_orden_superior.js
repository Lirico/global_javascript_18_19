


/********** FUNCIONES DE ORDEN SUPERIOR **********/

/* 
    Basicamente son funciones que reciben otras funciones por parametro.
    El objetivo es lograr que una funcion pueda operar con diferentes condiciones.


    function filtrar(lista, condicion){ Independientemente de que es la lista, y pueda filtrar bajo la condicion que yo quiera.

    }
*/

// function saludar(usuario)
// {
//     return `Hola ${usuario}`
// }
// function despedir(usuario)
// {
//     return `Adios ${usuario}`
// }

// function crearSaludo(usuario, saludo) // saludo -> f()
// {
//     return saludo(usuario)
// }

// console.log(crearSaludo("Pepe", saludar))


// const frutas = ["Mora", "Pera", "Banana", "Manzana"]

// const saludo = ["Hola", "como", "estas", "wachin?"]

// const numeros = [1,2,3,4,5]

// Me interesa filtrar las frutas que tiene 4 letras.

// const filtrar = (lista, condicion) =>
// {
//     const nuevaLista = []

//     for (const elemento of lista) 
//     {
//         if(condicion(elemento)) // T o F
//         {
//             nuevaLista.push(elemento)
//         }
//     }
//     return nuevaLista
// }

// console.log(filtrar(frutas, elemento => elemento.length === 4))
// console.log(filtrar(numeros, elemento => elemento % 2 === 0))





// Funciones nativas de JS

// forEach (PROCEDIMIENTO de recorrido)
// numeros.forEach(numero => console.log(numero))

// map -> (FUNCION de recorrido) retorna un nuevo arreglo
// frutas.map(fruta => fruta + " " + "podrida")

// filter
// console.log(frutas.filter(fruta => fruta.length === 4))

// find
// console.log(frutas.find(fruta => fruta.length === 4))

// reduce
// const total = numeros.reduce((acumulador, numero) => {
//     return acumulador + numero
// }, 0)

// const concatenacion = saludo.reduce((acumulador, palabra) => {
//     return acumulador + " " + palabra
// }, "")

// console.log(concatenacion)

// every -> Da true si todos los elementos del arreglo pasan la condicion
// const numeros = [2,4,6,8,9,10]

// console.log(numeros.every(numero => numero % 2 === 0))

// some -> Si al menos algun elemento pasa la condicion
// console.log(numeros.some(numero => numero % 2 === 1))

// sort
// const numeros = [1, 3, 20, 10, 4, 30, 2, 100]

// console.log(numeros.sort((a, b) => a - b))