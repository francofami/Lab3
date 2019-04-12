<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./Manejadora.js" ></script>
</head>
<body>
    <!-- No uso form porque el form me envia la pagina entera -->
    <input type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre..." /><br><br>
    <input type="button" onclick="Ajax.Ingresar()" value="Enviar" />

    <div id="div_mostrar"></div>    
</body>
</html>