/// <reference path="./Televisor.ts" />
var PrimerParcial;
(function (PrimerParcial) {
    var Manejadora = /** @class */ (function () {
        function Manejadora() {
        }
        Manejadora.AgregarTelevisor = function () {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', './BACKEND/administrar.php', true);
            xhr.setRequestHeader("enctype", "multipart/form-data");
            var codigo = +document.getElementById("codigo").value;
            var marca = document.getElementById("marca").value;
            var precio = +document.getElementById("precio").value;
            var tipo = document.getElementById("tipo").value;
            var paisOrigen = document.getElementById("paisOrigen").value;
            var pathFoto = document.getElementById("foto");
            var form = new FormData();
            var objTelevisor;
            objTelevisor = new Entidades.Televisor(codigo, marca, precio, tipo, paisOrigen, pathFoto);
            var objTelevisorJSON = objTelevisor.ToJSON();
            form.append('televisor', JSON.stringify(objTelevisorJSON));
            console.log(objTelevisorJSON);
            form.append('op', "Agregar");
            xhr.open('POST', './BACKEND/administrar.php', true);
            xhr.setRequestHeader("enctype", "multipart/form-data");
            xhr.send(form);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log(xhr.responseText);
                    var retJSON = JSON.parse(xhr.responseText);
                    //console.log(retJSON._foto);
                    document.getElementById("imgFoto").src = "./" + retJSON._pathFoto;
                    //MostrarListado();              
                }
            };
        };
        return Manejadora;
    }());
    PrimerParcial.Manejadora = Manejadora;
})(PrimerParcial || (PrimerParcial = {}));
