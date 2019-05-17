var Entidades;
(function (Entidades) {
    var Producto = /** @class */ (function () {
        function Producto(codigo, marca, precio) {
            this._codigo = codigo;
            this._marca = marca;
            this._precio = precio;
        }
        Producto.prototype.ToString = function () {
            var retorno;
            retorno = '{"_codigo":' + this._codigo.toString() + ',"_marca":"' + this._marca + '","_precio":' + this._precio.toString() + ',';
            return retorno;
        };
        return Producto;
    }());
    Entidades.Producto = Producto;
})(Entidades || (Entidades = {}));
