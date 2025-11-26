

/******** CIERRES ********/

/*
    Es un mecanismo por el cual intentamos proteger una variable del acceso desde no solo el ambito global
    sino tambien de un posible ambito interno en una bloque (por ejemplo una funcion.)
*/





// function crearSaludo(saludo){
//     return function(usuario){
//         return `${saludo} ${usuario}`
//     }
// }

// const saludarUsuario = crearSaludo("Hola")
// const despedirUsuario = crearSaludo("Adios")

// console.log(saludarUsuario("Pepe"))
// console.log(saludarUsuario("Mario"))
// console.log(saludarUsuario("Juampi"))
// console.log(despedirUsuario("Pepe"))
// console.log(despedirUsuario("Mario"))
// console.log(despedirUsuario("Juampi"))



// EL DILEMA DEL CONTADOR


// function incrementar(){
//     let contador = 0

//     return function() {
//         return contador += 1
//     }
// }

// const add = incrementar()

