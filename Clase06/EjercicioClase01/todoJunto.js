var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ejercicio03;
(function (Ejercicio03) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, dni, sexo) {
            this._nombre = nombre;
            this._apellido = apellido;
            this._dni = dni;
            this._sexo = sexo;
        }
        Persona.prototype.GetApellido = function () {
            return this._apellido;
        };
        Persona.prototype.GetDni = function () {
            return this._dni;
        };
        Persona.prototype.GetNombre = function () {
            return this._nombre;
        };
        Persona.prototype.GetSexo = function () {
            return this._sexo;
        };
        Persona.prototype.ToString = function () {
            return this._nombre + " - " + this._apellido + " - " + this._dni + " - " + this._sexo;
        };
        return Persona;
    }());
    Ejercicio03.Persona = Persona;
})(Ejercicio03 || (Ejercicio03 = {}));
/// <reference path="./Persona.ts" />
var Ejercicio03;
(function (Ejercicio03) {
    var Empleado = /** @class */ (function (_super) {
        __extends(Empleado, _super);
        function Empleado(nombre, apellido, dni, sexo, legajo, sueldo, foto) {
            var _this = _super.call(this, nombre, apellido, dni, sexo) || this;
            _this._legajo = legajo;
            _this._sueldo = sueldo;
            _this._foto = foto;
            return _this;
        }
        Empleado.prototype.GetLegajo = function () {
            return this._legajo;
        };
        Empleado.prototype.GetSueldo = function () {
            return this._sueldo;
        };
        Empleado.prototype.Hablar = function (idioma) {
            return "El empleado habla " + idioma;
        };
        Empleado.prototype.ToString = function () {
            return _super.prototype.ToString.call(this) + " - " + this._legajo + " - " + this._sueldo;
        };
        return Empleado;
    }(Ejercicio03.Persona));
    Ejercicio03.Empleado = Empleado;
})(Ejercicio03 || (Ejercicio03 = {}));
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
    //xhr.setRequestHeader("enctype", "multipart/form-data");
    //para enviar solo texto por post
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    var form = new FormData();
    form.append('obj', obj);
    form.append('op', 'EliminarDelListado');
    xhr.send(form);
}
