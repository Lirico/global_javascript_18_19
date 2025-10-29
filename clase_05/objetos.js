

/* OBJETOS */

/* 
    - Son colecciones
    - Dentro de estas colecciones los valores se ubican
    no por indice, sino por propiedad.
    - La idea de estas estructuras es representar elementos
    de la vida cotidiana o de la ficcion.
    Ej: Una persona, un auto, un animal, un personaje, un escudo
*/

const auto = {
    marca: "Peugeot", 
    color: "rojo", 
    modelo: "307", 
    price: 15000, 
    anio: 2023,
}

// Bracket notation (anotacion de corchete)
// console.log(auto["color"]) // Busca una propiedad que literalmente
                           // se llama color.
// console.log(auto[color])   // Busca una propiedad que coincida
                           // con el valor asignado a color.
// Dot walking (caminando sobre puntos)
// console.log(auto.rueda.derecha)

// const agregarPropiedad = (objeto, propiedad, valor) => {
//     objeto[propiedad] = valor

//     return objeto
// }

// agregarPropiedad(auto, "usado", false)
// agregarPropiedad(auto, "tipo", "4x4")

// console.log(auto)



const productos = [
    {id: 1, name: "Xayah", price: "10"},
    {id: 2, name: "Garen", price: "20"},
    {id: 3, name: "Twitch", price: "30"},
    {id: 4, name: "Yasuo", price: "40"},
    {id: 5, name: "Nasus", price: "50"}
]

const imprimirTarjetas = (lista) => {
    for (const elemento of lista) {
        console.log(`
            ${elemento.name}
              ${elemento.price}
            + 0 +
            AGREGAR
        `)        
    }
}


imprimirTarjetas(productos)