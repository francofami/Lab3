<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ingreso</title>
    <script src="./todoJunto.js" ></script>
    <style type="text/css">
			@import url("login.css");
    </style> 

</head>
<body>
    <div align="center">
    <table style="width:0%;height:0%">
        <form>
        <tr>
            <th align="center">INGRESO</th>
        </tr>

        <tr>
            <td><span>Legajo:</span></td>
        </tr>
        <tr>
            <td><input type="number" name="legajoIngreso" id="legajoIngreso"/></td>        
        </tr>

        <tr>
            <td><span>Clave:</span></td>
        </tr>
        <tr>
            <td><input type="password" name="claveIngreso" id="claveIngreso"/></td>        
        </tr>

        <tr>
            <td align="center" colspan="2"><input type="button" value="Aceptar" class="aceptar" onclick="Login()"/>
            <input type="reset" class="cancelar" value="Cancelar" /></td>
        </tr>
        </form>
    </table>
</body>
</div>
</html>