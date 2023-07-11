let productos = {
    panaderia: [],
    confiteria: [],
    postres: []
};

function agregarProductoPorPrompt() {
    const categoria = prompt("Ingrese la categoría del producto, puede ser: panaderia / confiteria / postres");
    const nombre = prompt("Ingrese el nombre del producto:");
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));

    if (productos[categoria]) {
        const id = generarIdUnico();
        const producto = { id, nombre, precio };
        productos[categoria].push(producto);
        alert("Producto agregado exitosamente");
        console.log("Producto creado:", producto); // Mostrar el producto creado en la consola
    } else {
        alert("La categoría especificada no existe en el objeto 'productos'.");
    }
}

function generarIdUnico() {
    return Math.floor(Date.now()); 
}

for (let i = 0; i < 3; i++) {
    agregarProductoPorPrompt();
}