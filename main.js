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