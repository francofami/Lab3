/// <reference path="./Perro.ts" />
var PrimerParcial;
(function (PrimerParcial) {
    var Manejadora = /** @class */ (function () {
        function Manejadora() {
        }
        Manejadora.EliminarPerro = function () {
        };
        Manejadora.AgregarPerroJSON = function () {
            var xhr = new XMLHttpRequest();
            var tamaño = document.getElementById("tamaño").value;
            var edad = +document.getElementById("edad").value;
            var precio = +document.getElementById("precio").value;
            var nombre = document.getElementById("nombre").value;
            var raza = document.getElementById("raza").value;
            var fotoInput = document.getElementById("foto");
            var path = document.getElementById("foto").value;
            var pathFoto = (path.split('\\'))[2];
            //let pathFoto : string = nombre+
            var form = new FormData();
            var perroAux;
            perroAux = new Entidades.Perro(tamaño, edad, precio, nombre, raza, pathFoto);
            var perroJSON = perroAux.ToJSON();
            form.append('caso', 'agregar');
            form.append('cadenaJson', JSON.stringify(perroJSON));
            console.log(perroJSON);
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
        Manejadora.MostrarPerrosJSON = function () {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', './BACKEND/administrar.php', true);
            //xhr.setRequestHeader("enctype", "multipart/form-data");
            //para enviar solo texto por post
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.send("caso=traer");
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    //console.log(xhr.responseText);
                    var perros = xhr.responseText;
                    var perrosJSON = JSON.parse(perros);
                    var tabla = "<table border='1' style='width:0%;height:0%'><tr><th>Tamaño</th><th>Edad</th><th>Precio</th><th>Nombre</th><th>Raza</th><th>Foto</th><th>Acciones</th></tr>";
                    var perro = void 0;
                    for (var _i = 0, perrosJSON_1 = perrosJSON; _i < perrosJSON_1.length; _i++) {
                        perro = perrosJSON_1[_i];
                        var modificar = "<td><button onclick='PrimerParcial.Manejadora.MostrarModificar(" + JSON.stringify(perro) + ")'>M</button>";
                        var eliminar = "<button onclick='PrimerParcial.Manejadora.Eliminar(" + JSON.stringify(perro) + ")'>X</button></td>";
                        tabla += "<tr><td>" + (perro)._tamaño + "</td><td>" + (perro)._edad + "</td><td>" + (perro)._precio + "</td><td>" + (perro)._nombre + "</td><td>" + (perro)._raza + "</td><td><img src='" + "./BACKEND/fotos/" + (perro)._pathFoto + "'widht=50 height=50/></td>" + modificar + eliminar + "</tr>";
                    }
                    tabla += "</table>";
                    document.getElementById("divTabla").innerHTML = tabla;
                }
            };
        };
        Manejadora.AgregarPerroEnBaseDatos = function () {
            var xhr = new XMLHttpRequest();
            var tamaño = document.getElementById("tamaño").value;
            var edad = +document.getElementById("edad").value;
            var precio = +document.getElementById("precio").value;
            var nombre = document.getElementById("nombre").value;
            var raza = document.getElementById("raza").value;
            var fotoInput = document.getElementById("foto");
            var path = document.getElementById("foto").value;
            var pathFoto = (path.split('\\'))[2];
            var form = new FormData();
            var perroAux;
            perroAux = new Entidades.Perro(tamaño, edad, precio, nombre, raza, pathFoto);
            var perroJSON = perroAux.ToJSON();
            form.append('cadenaJson', JSON.stringify(perroJSON));
            console.log(perroJSON);
            form.append('foto', fotoInput.files[0]);
            xhr.open('POST', './BACKEND/agregar_bd.php', true);
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
        Manejadora.VerificarExistencia = function () {
            var _this = this;
            var xhr = new XMLHttpRequest();
            var tamaño = document.getElementById("tamaño").value;
            var edad = +document.getElementById("edad").value;
            var precio = +document.getElementById("precio").value;
            var nombre = document.getElementById("nombre").value;
            var raza = document.getElementById("raza").value;
            var fotoInput = document.getElementById("foto");
            var path = document.getElementById("foto").value;
            var pathFoto = (path.split('\\'))[2];
            var perroAux;
            perroAux = new Entidades.Perro(tamaño, edad, precio, nombre, raza, pathFoto);
            var perroJSON = perroAux.ToJSON();
            var perroExiste = "0";
            var form2 = new FormData();
            form2.append('caso', 'comparar');
            form2.append('cadenaJson', JSON.stringify(perroJSON));
            xhr.open('POST', './BACKEND/administrar.php', true);
            xhr.setRequestHeader("enctype", "multipart/form-data");
            xhr.send(form2);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    //alert(xhr.responseText);
                    perroExiste = xhr.responseText;
                    if (perroExiste == "1") {
                        console.log("el perro ya existe no se puede agregar denuevo");
                        alert("el perro ya existe no se puede agregar denuevo");
                    }
                    else {
                        _this.AgregarPerroEnBaseDatos();
                    }
                }
            };
        };
        Manejadora.MostrarPerrosBaseDatos = function () {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', './BACKEND/administrar.php', true);
            //xhr.setRequestHeader("enctype", "multipart/form-data");
            //para enviar solo texto por post
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.send("caso=traerbd");
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log(xhr.responseText);
                    document.getElementById("divTabla").innerHTML = xhr.responseText;
                }
            };
        };
        return Manejadora;
    }());
    PrimerParcial.Manejadora = Manejadora;
})(PrimerParcial || (PrimerParcial = {}));
