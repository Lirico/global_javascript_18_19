
// SCOPE -> Ambito
//       -> Alcance

// En el año 2015 -> parche -> let / const

// Ambito global
// console.log(musica)
// let musica = "Pop"


// function bloque(){
//     let musica = "Rock"
// }

// bloque()

// var es reasignable y solo respeta el scope de bloques de funcion

// Estas 2 respetan a rajatabla el scope
// let -> permitir -> reasignar el valor original
// const -> constante -> no permite reasignacion



// Ahora que sabemos que let y const corrigen cuestion de scope
// respeto de var, ¿var se sigue usando?
// Resupuesta:
// Si y no
// No es necesaria en terminos funcionales
// var puede cumplir objetivos comunicativos

// ¿Cuando uso let y cuando uso const?

// let lo usamos siempre que asumamos que nuestra variable sera
// reasignada.
// Ejemplo:
// let contador = 0;

// const lo usamos en todos los demas casos.
// const PI = 3.141617263712
// const E = 2.1618237812


// Diferencia entre funcion DECLARADA y EXPRESADA

// ELEVACION O HOISTING


// FUNCION DECLARADA
// function sumar(a,b){
//     return a + b
// }

// console.log(sumar(3, 5))


// // FUNCION EXPRESADA
// const restar = function(a, b){ // Funcion anonima
//     return a - b
// }
// console.log(restar(3, 2))


// // FUNCION FLECHA (ARROW FUNCTION 2015)
// const multiplicar = (a, b) => a * b



// console.log(multiplicar(2, 4))



// Sombrero seleccionador de Harry Potter

const magoAleatorio = Math.ceil(Math.random() * 5)

const valienteYAtrevido = 1, 
    justicieroYAmable = 2,
    argumentativoYAnalitico = 3,
    astutoEInescrupuloso = 4;

const sombreroSeleccionador = (test) => {
    switch(test){
        case valienteYAtrevido:
            return "Griffindor";
        case justicieroYAmable:
            return "Hufflepuff";
        case argumentativoYAnalitico:
            return "Ravenclaw";
        case astutoEInescrupuloso:
            return "Slytherin";
        default:
            return "Azkaban";
    }
}

console.log(sombreroSeleccionador(magoAleatorio))




const d20 = Math.ceil(Math.random() * 20)

console.log(d20)

const d4 = Math.ceil(Math.random() * 4)

console.log(d4)

const d8 = Math.ceil(Math.random() * 8)

console.log(d8)

// Deben crear una funcion que reciba un dado y una cantidad
// de tiradas y retorne el total de todas las tiradas.
const atacar = (tiradas, dado) => {
    return tiradas + Math.ceil(Math.random() * dado)
}

atacar(1, 20)