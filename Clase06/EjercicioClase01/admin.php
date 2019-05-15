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
                    $modificar = "<td><button onclick='MostrarModificar(".json_encode($objetoJson).")'>M</button>";
                    $eliminar = "<button onclick='Eliminar(".json_encode($objetoJson).")'>X</button></td>";
                    $tabla .= "<tr><td>$objetoJson->_nombre</td><td>$objetoJson->_legajo</td><td><img src='$objetoJson->_foto'widht=50 height=50/></td>".$modificar.$eliminar."</tr>";
                }
                
                
            } 
            fclose($file);
        
        echo   $tabla .= "</table>";
        break;

        case "EliminarDelListado":

        $arrayObjetos = array();

        $file = fopen("./empleados.txt", "r");
        $objJsonPost = json_decode($_POST["obj"]);

        while(!feof($file))
        {        
            $linea = trim(fgets($file));

            echo $linea;

            if(strcmp("", $linea) == 0)
            {
                continue;
            }   

            $linea = json_decode($linea);

            if($linea->_legajo == $objJsonPost->_legajo)
            {
                continue;
            }

            array_push($arrayObjetos, $linea);
        }


        fclose($file);

        $file = fopen("./empleados.txt", "w");

        $texto = "";

        foreach($arrayObjetos as $objeto)
        {
            $texto .= json_encode($objeto)."\r\n";
        }

        fwrite($file, $texto);
        
        fclose($file);
        break;

        case 'Modificar':

            $objRetorno = new stdClass();
            $objRetorno->Ok = false;   
            
            if (isset($_FILES["foto"]))
            {
                $destino = "./BACKEND/fotos/" . date("Ymd_His") . ".jpg";

                if(move_uploaded_file($_FILES["foto"]["tmp_name"], $destino) ){
                    $objRetorno->Ok = true;
                    $objRetorno->_foto = $destino;
                }
            }
            else
            {
                $objRetorno->_foto = "./BACKEND/fotos/" . date("Ymd_His") . ".jpg";
            }

            $objRetorno->_nombre = $_POST["nombre"];
            $objRetorno->_apellido = $_POST["apellido"];
            $objRetorno->_dni = $_POST["dni"];
            $objRetorno->_sexo = $_POST["sexo"];
            $objRetorno->_legajo = $_POST["legajo"];
            $objRetorno->_sueldo = $_POST["sueldo"];

            $objetoJsonPost = json_encode($objRetorno);

            $objetoJsonPost = json_decode($objetoJsonPost);

            $arrayObjetos = array();

            $file = fopen("./empleados.txt", "r");
            //$objJsonPost = json_decode($_POST["obj"]);
    
            while(!feof($file))
            {        
                $linea = trim(fgets($file));
    
                if(strcmp("", $linea) == 0)
                {
                    continue;
                }   
    
                $objLinea = json_decode($linea);
    
                if($objLinea->_legajo == $objetoJsonPost->_legajo)
                {
                    echo json_encode($objetoJsonPost);
                    array_push($arrayObjetos, $objetoJsonPost);
                }
                else
                {
                    array_push($arrayObjetos, $objLinea);
                }
            }
    
            fclose($file);
    
            $file = fopen("./empleados.txt", "w");
    
            $texto = "";
    
            foreach($arrayObjetos as $objeto)
            {
                $texto .= json_encode($objeto)."\r\n";
            }
    
            fwrite($file, $texto);
            
            fclose($file);
            
        break;
    
        default:
            echo ":(";
            break;
    }



    //Debo copiar la carpeta a xamp/htdocs para utilizar el php
    
?>

