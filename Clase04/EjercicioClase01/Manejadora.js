var Ajax;
(function (Ajax) {
    function Saludar() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "administrar.php", true);
        xhttp.send();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                //alert(xhttp.responseText);
                alert("Hola mundo");
                console.log("Hola mundo");
                document.getElementById("div_mostrar").innerHTML = "Hi World";
            }
            //alert(xhttp.readyState);
            //console.log(xhttp.readyState);
            //(<HTMLDivElement>document.getElementById("div_mostrar")).innerHTML = xhttp.readyState;
        };
    }
    Ajax.Saludar = Saludar;
    function Ingresar() {
        if (Verificar() == true) {
            alert("El nombre ingresado ya existe");
        }
        else {
            var xhttp_1 = new XMLHttpRequest();
            var nombre_1 = document.getElementById("nombre").value;
            xhttp_1.open("POST", "administrar.php", true);
            xhttp_1.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhttp_1.send("nombre=" + nombre_1 + "&accion=" + 2);
            xhttp_1.onreadystatechange = function () {
                if (xhttp_1.readyState == 4 && xhttp_1.status == 200) {
                    //alert(xhttp.responseText);
                    console.log(xhttp_1.responseText);
                    document.getElementById("div_mostrar").innerHTML = xhttp_1.responseText;
                    if (xhttp_1.responseText == "1") {
                        alert("Se pudo ingresar el nombre: " + nombre_1);
                        Mostrar();
                    }
                    else {
                        alert("No se pudo ingresar el nombre: " + nombre_1);
                    }
                }
            };
        }
    }
    Ajax.Ingresar = Ingresar;
    function Mostrar() {
        var xhttp = new XMLHttpRequest();
        var nombre = document.getElementById("nombre").value;
        xhttp.open("POST", "administrar.php", true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send("nombre=" + nombre + "&accion=" + 3);
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                //alert(xhttp.responseText);
                console.log(xhttp.responseText);
                document.getElementById("div_mostrar").innerHTML = xhttp.responseText;
            }
        };
    }
    function Verificar() {
        var retorno;
        var xhttp = new XMLHttpRequest();
        var nombre = document.getElementById("nombre").value;
        xhttp.open("POST", "administrar.php", true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send("nombre=" + nombre + "&accion=" + 4);
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                //alert(xhttp.responseText);
                //console.log(xhttp.responseText);
                //(<HTMLDivElement>document.getElementById("div_mostrar")).innerHTML = xhttp.responseText;
                if (xhttp.responseText == "0") {
                    retorno = true;
                }
                else {
                    retorno = false;
                }
            }
        };
        return retorno;
    }
})(Ajax || (Ajax = {}));
