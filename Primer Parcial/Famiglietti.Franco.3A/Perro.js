/// <reference path="./Mascota.ts" />
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
var Entidades;
(function (Entidades) {
    var Perro = /** @class */ (function (_super) {
        __extends(Perro, _super);
        function Perro(tamaño, edad, precio, nombre, raza, pathFoto) {
            var _this = _super.call(this, tamaño, edad, precio) || this;
            _this._nombre = nombre;
            _this._raza = raza;
            _this._pathFoto = pathFoto;
            return _this;
        }
        Perro.prototype.ToJSON = function () {
            var retorno;
            var string;
            string = this.ToString();
            string += '"_nombre":"' + this._nombre + '","_raza":"' + this._raza + '","_pathFoto":"' + this._pathFoto + '"}';
            retorno = JSON.parse(string);
            return retorno;
        };
        return Perro;
    }(Entidades.Mascota));
    Entidades.Perro = Perro;
})(Entidades || (Entidades = {}));
