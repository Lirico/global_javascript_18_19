

/********* RECURSION ********/
/* 
    Consiste en una funcion que se llama a si misma una
    y otra vez hasta que una condicion deja de cumplirse.
*/


// function cuentaRegresiva(numero){
//     console.log(numero)

//     if(numero > 0){
//         cuentaRegresiva(numero - 1)
//     }
// }


// cuentaRegresiva(3)



// let contraseña = prompt("Ingrese su contraseña: ")
// let intentos = 4

// do {
//     if(contraseña === "pepe123"){
//         console.log("Contrasña correcta");
//         break;
//     }
//     intentos -= 1
//     console.log(intentos)
//     contraseña = prompt("Ingrese su contraseña: ")    
// } while (intentos > 0); // Mientras que sea mayor, ejecutamos

// // Cuando sea menor, ejecutamos
// if(intentos < 1){
//     console.log("Has superado la canitdad de intentos. Tu dinero ahora es propiedad del banco.")
// }


// SECUENCIA DE FIBONACCI

// fn = fn-1 + fn-2 tal que n >= 2
// 0 1 1 2 3 5 8 13 21 34 ....


// La condicion de corte en una funcion recursiva se llama:
// CASO BASE

// function f(n){
//     if(n < 2) return n
    
//     return f(n - 1) + f(n - 2)
// }


// f(0)
// // return 0

// f(1)
// // return 1

// f(2) 
// // return 1 + 0

// f(3)
// return f(3 - 1) + f(3 - 2) = (f(2-1) + f(2-2)) + 1 = 1 + 0 + 1 = 2

// f(4)
// return f(4 - 1) + f(4 - 2) = (f(3 - 1) + f(3 -2)) + (f(2-1) + f(2-2)) = (f(2-1) + f(2-2)) + 1 + 1 + 0 = 1 + 0 + 1 + 1 + 0 = 3 


// console.log(f(45))


function factorial(numero){

    if(numero < 2) return 1
    
    return numero * factorial(numero - 1)
}

function potencia(numero, exponente){

    if(exponente < 1){
        return 1
    }

    return numero * potencia(numero, exponente - 1) 
}
