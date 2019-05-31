var Entidades;
(function (Entidades) {
    var Mascota = /** @class */ (function () {
        function Mascota(tamaño, edad, precio) {
            this._tamaño = tamaño;
            this._edad = edad;
            this._precio = precio;
        }
        Mascota.prototype.ToString = function () {
            var retorno;
            retorno = '{"_tamaño":"' + this._tamaño + '","_edad":' + this._edad.toString() + ',"_precio":' + this._precio.toString() + ',';
            return retorno;
        };
        return Mascota;
    }());
    Entidades.Mascota = Mascota;
})(Entidades || (Entidades = {}));
