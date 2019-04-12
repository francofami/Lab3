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
        var xhttp = new XMLHttpRequest();
        var nombre = document.getElementById("nombre").value;
        xhttp.open("POST", "administrar.php", true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send("nombre=" + nombre + "&accion=" + 2);
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                //alert(xhttp.responseText);
                console.log(xhttp.responseText);
                document.getElementById("div_mostrar").innerHTML = xhttp.responseText;
                if (xhttp.responseText == "1") {
                    alert("Se pudo ingresar el nombre: " + nombre);
                    Mostrar();
                }
                else {
                    alert("No se pudo ingresar el nombre: " + nombre);
                }
            }
        };
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
})(Ajax || (Ajax = {}));
