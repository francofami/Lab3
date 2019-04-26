<?php

/*Realizar una aplicación web que muestre un listado de autos, tomando como origen de datos el
archivo autos.json . La aplicación tendrá sólo un botón (<input type=”button”>), que al
pulsarlo, generará dinámicamente un listado de los autos (armar una tabla html) que se
reciban como objetos JSON desde el archivo. Como página nexo, utilice traerAutos.php.*/


$archivo = fopen("autos.json", "r");

echo fread($archivo, filesize("autos.json"));

fclose($archivo);


?>