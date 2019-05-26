/// <reference path="./Televisor.ts" />
window.onload = function () {
    PrimerParcial.Manejadora.MostrarTelevisores();
};
var PrimerParcial;
(function (PrimerParcial) {
    var Manejadora = /** @class */ (function () {
        function Manejadora() {
        }
        Manejadora.AgregarTelevisor = function () {
            var xhr = new XMLHttpRequest();
            var codigo = +document.getElementById("codigo").value;
            var marca = document.getElementById("marca").value;
            var precio = +document.getElementById("precio").value;
            var tipo = document.getElementById("tipo").value;
            var paisOrigen = document.getElementById("paisOrigen").value;
            var fotoInput = document.getElementById("foto");
            var path = document.getElementById("foto").value;
            var pathFoto = (path.split('\\'))[2];
            var form = new FormData();
            var objTelevisor;
            objTelevisor = new Entidades.Televisor(codigo, marca, precio, tipo, paisOrigen, pathFoto);
            var objTelevisorJSON = objTelevisor.ToJSON();
            form.append('caso', 'agregar');
            form.append('cadenaJson', JSON.stringify(objTelevisorJSON));
            console.log(objTelevisorJSON);
            form.append('foto', fotoInput.files[0]);
            xhr.open('POST', './BACKEND/administrar.php', true);
            xhr.setRequestHeader("enctype", "multipart/form-data");
            xhr.send(form);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log(xhr.responseText);
                    var retJSON = JSON.parse(xhr.responseText);
                    console.log(retJSON._foto);
                    document.getElementById("imgFoto").src = "./BACKEND/fotos/" + retJSON._pathFoto;
                    //MostrarListado();              
                }
            };
        };
        Manejadora.MostrarTelevisores = function () {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', './BACKEND/administrar.php', true);
            //xhr.setRequestHeader("enctype", "multipart/form-data");
            //para enviar solo texto por post
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.send("caso=traer");
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    //console.log(xhr.responseText);
                    var televisores = xhr.responseText;
                    var televisoresJSON = JSON.parse(televisores);
                    var tabla = "<table border='1' style='width:0%;height:0%'><tr><th>Tipo</th><th>Pais</th><th>Codigo</th><th>Marca</th><th>Precio</th><th>Foto</th><th>Acciones</th></tr>";
                    var televisor = void 0;
                    for (var _i = 0, televisoresJSON_1 = televisoresJSON; _i < televisoresJSON_1.length; _i++) {
                        televisor = televisoresJSON_1[_i];
                        var modificar = "<td><button onclick='PrimerParcial.Manejadora.MostrarModificar(" + JSON.stringify(televisor) + ")'>M</button>";
                        var eliminar = "<button onclick='PrimerParcial.Manejadora.Eliminar(" + JSON.stringify(televisor) + ")'>X</button></td>";
                        tabla += "<tr><td>" + (televisor)._tipo + "</td><td>" + (televisor)._paisOrigen + "</td><td>" + (televisor)._codigo + "</td><td>" + (televisor)._marca + "</td><td>" + (televisor)._precio + "</td><td><img src='" + "./BACKEND/fotos/" + (televisor)._pathFoto + "'widht=50 height=50/></td>" + modificar + eliminar + "</tr>";
                    }
                    tabla += "</table>";
                    document.getElementById("divTabla").innerHTML = tabla;
                }
            };
        };
        Manejadora.MostrarModificar = function (televisor) {
            document.getElementById("tipo").value = televisor._tipo;
            document.getElementById("paisOrigen").value = televisor._paisOrigen;
            document.getElementById("codigo").value = televisor._codigo;
            document.getElementById("marca").value = televisor._marca;
            document.getElementById("precio").value = televisor._precio;
            document.getElementById("imgFoto").src = "./BACKEND/fotos/" + televisor._pathFoto;
            document.getElementById("codigo").disabled = true; //Para que no se pueda ver
        };
        Manejadora.Eliminar = function (televisor) {
        };
        Manejadora.GuardarEnLocalStorage = function () {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', './BACKEND/administrar.php', true);
            //xhr.setRequestHeader("enctype", "multipart/form-data");
            //para enviar solo texto por post
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.send("caso=traer");
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log(xhr.responseText);
                }
            };
        };
        return Manejadora;
    }());
    PrimerParcial.Manejadora = Manejadora;
})(PrimerParcial || (PrimerParcial = {}));
