/* 

Aplicación Nº 1 (Generar un Json)
Crear un Json que represente información acerca de un producto (codigoBarra, nombre,
precio). Diseñarlo en el <script type=”text/javascript”>.
Validar su buen diseño ingresando en “http://jsonviewer.stack.hu/” .
Una vez validado el Json, mostrar todos sus atributos en un alert() y en el console.log() .

*/

var producto = [{"codigoBarra":"0001","nombre":"Manaos","precio":42},{"codigoBarra":"0002","nombre":"Pepsi","precio":85},{"codigoBarra":"0003","nombre":"Coca-Cola","precio":105}];

var string = "productos=" + JSON.stringify(producto);

//alert(producto.codigoBarra);
//alert(producto.nombre);
//alert(producto.precio);

//console.log(producto.codigoBarra);
//console.log(producto.nombre);
//console.log(producto.precio);

    let xmlhttp : XMLHttpRequest = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            alert(xmlhttp.responseText);
        }
    }
    
    xmlhttp.open("POST", "mostrarColeccionJson.php", true);
    xmlhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xmlhttp.send(string);

