/*

let number = prompt('Ingrese un numero entre 1 y 100')
let numberNumber = parseInt(number)

if (numberNumber <= 100 && numberNumber >= 1) {

    alert('Muy bien, usted ha ingresado ' + numberNumber);

} else {
    alert('Error, usted ha ingresado un numero incorrecto')
}

*/



/*

for (let i = 1; i <= 24; i++) {

    let nombre = prompt('Ingrese su nombre')
    let apellido = prompt('Ingrese su apellido')

    let edad = prompt('Ingrese su edad')
    let edadNum = parseInt(edad)

    if (edadNum >= 18) {

        alert(nombre + apellido + ' se te ha asignado el turno ' + i)
    } else {
        alert('Lo sentimos, solo atendemos personas mayores de edad')
        i--
    }

}

*/



/*

let entrada = prompt('Ingrese un número. Para finalizar, ingrese "ESC"')
let sumaTotal = 0

while (entrada !== 'ESC') {

    let numero = parseInt(entrada)
    sumaTotal += numero

    alert('Usted ha ingresado ' + numero + '. El total es ' + sumaTotal)

    entrada = prompt('Ingrese un número. Para finalizar, ingrese "ESC"')

}

*/



/*

let entrada = prompt('Ingrese su edad');
let edad = parseInt(entrada);

function jubilacion(edad) {
    return 65 - edad;
}

if (edad >= 65) {
    console.log('Usted tiene', edad, 'ya puede jubilarse');
} else {
    let aniosFaltantes = jubilacion(edad);
    console.log('Faltan', aniosFaltantes, 'años para jubilarse.');
}

*/

/*

function solicitarInformacionPersonal() {

    let nombre = prompt('Ingrese su nombre');

    let apellido = prompt('Ingrese su apellido');

    let edad = prompt('Ingrese su edad');
    let edadNum = parseInt(edad);

    return [nombre, apellido, edadNum];
}


for (let i = 1; i <= 24; i++) {

    let [nombre, apellido, edadNum] = solicitarInformacionPersonal();

    if (edadNum >= 18) {
        alert(nombre + ' ' + apellido + ' se te ha asignado el turno ' + i);
    } else {
        alert('Lo sentimos, solo atendemos personas mayores de edad');
        i--;
    }

}

*/

/*

let nombreUsuario = prompt('Ingrese su nombre');
let edadUsuario = prompt('Ingrese su edad');

let usuario = {
  nombre: nombreUsuario,
  edad: parseInt(edadUsuario),
  info: function() {
    console.log(this.nombre + " tiene " + this.edad + " años");
  }
}

usuario.info(); 

*/

/*

let nombre = prompt(`Ingrese su nombre`)
let notaUno = prompt(`Ingresar la primera nota`)
let notaDos = prompt(`Ingresar la segunda nota`)
let notaTres = prompt(`Ingresar la tercera nota`)

class Alumno {

    constructor(nombre, notaUno, notaDos, notaTres) {

        this.nombre = nombre
        this.notaUno = parseInt(notaUno)
        this.notaDos = parseInt(notaDos)
        this.notaTres = parseInt(notaTres)

    }

}

function calcularPromedio() {

    let promedio = (alumno.notaUno + alumno.notaDos + alumno.notaTres) / 3;

    console.log("Su promedio es " + promedio);

}

let alumno = new Alumno(nombre, notaUno, notaDos, notaTres);

calcularPromedio();

*/



/*

// array vacío para almacenar los productos

let productos = [];


// se pide al usuario que ingrese el nombre y precio del producto 3 veces

for (let i = 0; i < 3; i++) {

    let nombre = prompt("Ingrese el nombre del producto:");

    let precio = parseFloat(prompt("Ingrese el precio del producto:"));


    // objeto para almacenar el producto y su precio

    let producto = {

        nombre: nombre,

        precio: precio

    };


    // Agregamos el producto al array

    productos.push(producto);
}

// Creamos un array para almacenar los productos con IVA

let productosConIVA = [];


// Calculamos el precio con IVA para cada producto y lo agregamos al nuevo array

for (let i = 0; i < productos.length; i++) {
    
    let productoConIVA = {
        nombre: productos[i].nombre,
        precioConIVA: productos[i].precio * 1.21
    };

    productosConIVA.push(productoConIVA);
}


// Mostramos los productos y sus precios con IVA

for (let i = 0; i < productosConIVA.length; i++) {
    alert(
        "Producto: " +
        productosConIVA[i].nombre +
        "\nPrecio con IVA: $" +
        productosConIVA[i].precioConIVA.toFixed(2)
    );
}

*/



/*

let productos = [
    { categoria: 'panaderia', productos: [] },
    { categoria: 'confiteria', productos: [] },
    { categoria: 'postres', productos: [] }
];

// Producto que deseas agregar
let postresUno = { nombre: 'Postre de chocolate', precio: 5000 };

// Buscar la categoría "postres" en el array
let categoriaPostres = productos.find(item => item.categoria === 'postres');

// Agregar el nuevo producto a la categoría "postres"
categoriaPostres.productos.push(postresUno);

*/


/*

function ejercicio2() {

    let productos = [];

    class Producto {

        constructor(nombre, precio) {

            this.nombre = nombre;

            this.precio = precio;
        }

    }

    for (let i = 1; i < 4; i++) {

        let nombre = prompt("Escriba el nombre del producto: " + i);

        let precio = parseFloat(

            prompt(`Escriba el precio del producto: ${nombre}`)

        );

        let producto = new Producto(nombre, precio);

        productos.push(producto);

    }

    let precioFiltro = parseFloat(prompt("Escriba el precio a filtrar: "));

    let filtroPrecio = productos.filter((producto) => producto.precio < precioFiltro);

    console.log(filtroPrecio);

    let sorted = productos.sort((a, b) => a.nombre > b.nombre)

    console.log(sorted);

}

*/

/*

let productos = {
    panaderia: [],
    confiteria: [],
    postres: []
};

// agregar productos a la categoría "postres"

productos.postres.push({ id: 1, nombre: 'Postre 1', precio: 5000 });
productos.postres.push({ id: 2, nombre: 'Postre 2', precio: 3500 });

// agregar productos a la categoría "confiteria"
productos.confiteria.push({ id: 20, nombre: 'Tarta de frutas', precio: 1000 });

// array para tipos de masas finas dentro de la categoría "confiteria"

productos.confiteria.masasFinas = [];

// agregar tipos de masas finas al array

productos.confiteria.masasFinas.push({ id: 21, nombre: 'Masa Fina 1', precio: 4000 });
productos.confiteria.masasFinas.push({ id: 22, nombre: 'Masa Fina 2', precio: 4500 });

// agregar producto a la categoría "panaderia"
productos.panaderia.push({ id: 30, nombre: 'Pan', precio: 800 });

*/