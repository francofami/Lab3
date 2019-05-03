<?php

    //var_dump($_POST);
    
    $op = isset($_POST["op"]) ? $_POST["op"] : null;


    switch ($op) {

        case "subirFoto":
    
            $objRetorno = new stdClass();
            $objRetorno->Ok = false;
    
            $destino = "./BACKEND/fotos/" . date("Ymd_His") . ".jpg";
            
            if(move_uploaded_file($_FILES["foto"]["tmp_name"], $destino) ){
                $objRetorno->Ok = true;
                $objRetorno->_foto = $destino;
            }

            $objRetorno->_nombre = $_POST["nombre"];
            $objRetorno->_apellido = $_POST["apellido"];
            $objRetorno->_dni = $_POST["dni"];
            $objRetorno->_sexo = $_POST["sexo"];
            $objRetorno->_legajo = $_POST["legajo"];
            $objRetorno->_sueldo = $_POST["sueldo"];

            $file = fopen("empleados.txt", "a");

            $objetoJson = json_encode($objRetorno);

            fwrite($file, $objetoJson."\r\n");

            fclose($file);

            echo $objetoJson;
    
            break;

        case "MostrarListado":

            $file = fopen("./empleados.txt", "r");
            
            $tabla = "<table border='1' style='width:0%;height:0%'><tr><th>Nombre</th><th>Legajo</th><th>Foto</th><th>Acciones</th></tr>";
            while(!feof($file))
            {
                $linea = fgets($file);
                if(strcmp($linea,""))
                {
                    $objetoJson = json_decode($linea);
                    $eliminar = "<button onclick='Eliminar(".json_encode($objetoJson).")'>X</button></td>";
                    $tabla .= "<tr><td>$objetoJson->_nombre</td><td>$objetoJson->_legajo</td><td><img src='$objetoJson->_foto'widht=50 height=50/></td><td>".$eliminar."</tr>";
                }
                
                
            } 
            fclose($file);
        
        echo   $tabla .= "</table>";
        break;

        case "EliminarDelListado":
        $file = fopen("./empleados.txt", "r");
        while(!feof($file))
        {        
            $linea = fgets($file);

            if(strcmp(trim($linea), $_POST["obj"]))
            {
                
            }

            break;
        }
        fclose($file);

        break;
    
        default:
            echo ":(";
            break;
    }



    //Debo copiar la carpeta a xamp/htdocs para utilizar el php
    
?>

