let nombre = prompt(`Ingrese su nombre`)
let notaUno = prompt(`Ingresar la primera nota`)
let notaDos = prompt(`Ingresar la segunda nota`)
let notaTres = prompt(`Ingresar la tercera nota`)

class AlumnoObjeto {

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