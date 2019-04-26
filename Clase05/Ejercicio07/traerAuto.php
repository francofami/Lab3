<?php

/*Realizar una aplicación web que, a través de Ajax, lea el archivo auto.json desde la página
traerAuto.php y muestre el JSON recibido por alert() y en el console.log()*/

$archivo = fopen("auto.json", "r");

echo fgets($archivo);

fclose($archivo);

?>