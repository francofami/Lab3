/// <reference path="./Empleado.ts" />
//let empleado01 : Ejercicio03.Empleado = new Ejercicio03.Empleado("Juan", "Perez", 25123123, "M", 123123, 50000);
//console.log(empleado01.ToString());
function NuevoEmpleado() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var dni = +document.getElementById("dni").value;
    var sexo = document.getElementById("sexo").value;
    var legajo = +document.getElementById("legajo").value;
    var sueldo = +document.getElementById("sueldo").value;
    var nuevoEmpleado = new Ejercicio03.Empleado(nombre, apellido, dni, sexo, legajo, sueldo);
    console.log(nuevoEmpleado.ToString());
    var frm = document.getElementById("frmEmpleado"); //No hay que poner .value
    frm.submit(); //Envio formulario al admin.php
}
