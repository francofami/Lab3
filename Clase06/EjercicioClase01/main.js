/// <reference path="./Empleado.ts" />
//let empleado01 : Ejercicio03.Empleado = new Ejercicio03.Empleado("Juan", "Perez", 25123123, "M", 123123, 50000);
//console.log(empleado01.ToString());
window.onload = function () {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', './admin.php', true);
    //xhr.setRequestHeader("enctype", "multipart/form-data");
    //para enviar solo texto por post
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("op=MostrarListado");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
            var tabla = xhr.responseText;
            document.getElementById("tabla").innerHTML = tabla;
        }
    };
};
function SubirFoto() {
    var xhr = new XMLHttpRequest();
    var foto = document.getElementById("foto");
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var dni = +document.getElementById("dni").value;
    var sexo = document.getElementById("sexo").value;
    var legajo = +document.getElementById("legajo").value;
    var sueldo = +document.getElementById("sueldo").value;
    var form = new FormData();
    form.append('foto', foto.files[0]);
    form.append('nombre', nombre);
    form.append('apellido', apellido);
    form.append('dni', dni.toString());
    form.append('sexo', sexo);
    form.append('legajo', legajo.toString());
    form.append('sueldo', sueldo.toString());
    form.append('op', "subirFoto");
    xhr.open('POST', './admin.php', true);
    xhr.setRequestHeader("enctype", "multipart/form-data");
    xhr.send(form);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
            var retJSON = JSON.parse(xhr.responseText);
            if (!retJSON.Ok) {
                console.error("NO se subió la foto!!!");
            }
            else {
                console.info("Foto subida OK!!!");
                document.getElementById("imgFoto").src = "./" + retJSON._foto;
            }
        }
    };
}
function Eliminar(obj) {
    console.log(obj);
    if (!confirm("Está seguro que desea eliminar a: " + obj._nombre)) {
        return;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('POST', './admin.php', true);
    xhr.setRequestHeader("enctype", "multipart/form-data"); //si envio json uso esto
    //para enviar solo texto por post
    //xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    var form = new FormData();
    form.append('obj', obj);
    form.append('op', 'EliminarDelListado');
    xhr.send(form);
}
function Modificar(obj) {
    console.log(obj);
    if (!confirm("Está seguro que desea eliminar a: " + obj._nombre)) {
        return;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('POST', './admin.php', true);
    xhr.setRequestHeader("enctype", "multipart/form-data"); //si envio json uso esto
    //para enviar solo texto por post
    //xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    var form = new FormData();
    form.append('obj', obj);
    form.append('op', 'Modificar');
    xhr.send(form);
}
