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

