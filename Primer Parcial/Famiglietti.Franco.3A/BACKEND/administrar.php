<?php

include_once ("Conexion.php");


$caso = isset($_POST["caso"]) ? $_POST["caso"] : null;
//var_dump($caso);
sleep(1);
switch ($caso) {
    case 'agregar':
        $cadenaJSON = isset($_POST['cadenaJson']) ? $_POST['cadenaJson'] : null;
             
        $ar = fopen("./perro.json", "a");
		
		$cant = fwrite($ar, $cadenaJSON . "\r\n");
        fclose($ar);
        $resultado["TodoOK"] = $cant > 0 ? true : false;
        $pathOrigen = $_FILES['foto']['tmp_name'];   
        
        $objJson = json_decode($cadenaJSON);    
        //echo($cadenaJSON); die();   
        $pathDestino = "./fotos/".$objJson->_pathFoto;
        
        move_uploaded_file($pathOrigen, $pathDestino);
        //echo json_encode($resultado);
        echo $cadenaJSON;
    break;
    case 'traer':
    
        $a = fopen("./perro.json", "r");
        $string = "";
        while(!feof($a)){
        
            $linea = trim(fgets($a));
        
            if(strlen($linea) > 0)
                $string .=  $linea . ',';        
        }
        
        fclose($a);
        $string = substr($string, 0, strlen($string)-1);        
        
        echo ('['.$string.']');
        
    break;
    
    case'traerbd':

        $objCon=new Conexion();
        $conexion=$objCon->GetConexion();
        $sentencia=$conexion->prepare('SELECT tamanio,edad,precio,nombre,raza,path_foto FROM perros');
        $sentencia->execute();
        $retorno="<table border=1><tr><th>ID</th><th>MARCA</th><th>COLOR</th><th>PATENTE</th></tr>";
        
        while($perro=$sentencia->fetch()){
            $retorno.="<tr><td>".$perro[0]."</td><td>".$perro[1]."</td><td>".$perro[2]."</td><td>".$perro[3]."</td><td>".$perro[4]."</td><td>".$perro[5]."</td><td><img src='"."./BACKEND/fotos/".$perro[6]."'widht=50 height=50/></td></tr>";
        }
        $retorno.="</table>";
        return $retorno;

    break;
    case'comparar':

        $cadenaJSON = isset($_POST['cadenaJson']) ? $_POST['cadenaJson'] : null;
        $objJson = json_decode($cadenaJSON);   
        $objCon=new Conexion();
        $conexion=$objCon->GetConexion();
        $sentencia=$conexion->prepare('SELECT tamanio,edad,precio,nombre,raza,path_foto FROM perros');
        $sentencia->execute();
        $retorno;
        
        while($perro=$sentencia->fetch()){
            if($perro[1] == $objJson->_edad && $perro[4] == $objJson->_raza)
            {
                $retorno ="1";
            } 

        }

        return $retorno;

    break;
    default:
        echo ":(";
        break;
}