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
        function Empleado(nombre, apellido, dni, sexo, legajo, sueldo) {
            var _this = _super.call(this, nombre, apellido, dni, sexo) || this;
            _this._legajo = legajo;
            _this._sueldo = sueldo;
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
