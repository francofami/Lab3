/// <reference path="./Empleado.ts" />

//let empleado01 : Ejercicio03.Empleado = new Ejercicio03.Empleado("Juan", "Perez", 25123123, "M", 123123, 50000);

//console.log(empleado01.ToString());

function NuevoEmpleado()
{
    let nombre : string = (<HTMLInputElement> document.getElementById("nombre")).value;
    let apellido : string = (<HTMLInputElement> document.getElementById("apellido")).value;
    let dni : number = +(<HTMLInputElement> document.getElementById("dni")).value;
    let sexo : string = (<HTMLInputElement> document.getElementById("sexo")).value;
    let legajo : number = +(<HTMLInputElement> document.getElementById("legajo")).value;
    let sueldo : number = +(<HTMLInputElement> document.getElementById("sueldo")).value;

    let nuevoEmpleado : Ejercicio03.Empleado = new Ejercicio03.Empleado(nombre, apellido, dni, sexo, legajo, sueldo);
    console.log(nuevoEmpleado.ToString());

    let frm = <HTMLFormElement> document.getElementById("frmEmpleado"); //No hay que poner .value
    frm.submit(); //Envio formulario al admin.php
}

