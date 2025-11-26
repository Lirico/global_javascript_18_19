


const productos = [
    {
        id: "1",
        nombre: "Producto A",
        precio: 10
    },
    {
        id: "2",
        nombre: "Producto B",
        precio: 20
    },
    {
        id: "3",
        nombre: "Producto C",
        precio: 30
    },
    {
        id: "4",
        nombre: "Producto D",
        precio: 40
    },
]


console.log("--- CARRITO ----")

function addToCart(id){
    const newItem = productos.find(producto => producto.id === id)

    console.log(newItem)
}



