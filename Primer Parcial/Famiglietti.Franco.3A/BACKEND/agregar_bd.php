<?php 

    include_once ("Conexion.php");

    $caso = isset($_POST["caso"]) ? $_POST["caso"] : null;

    if($caso == 'agregar_bd')
    {
        $cadenaJSON = isset($_POST['cadenaJson']) ? $_POST['cadenaJson'] : null;
        echo $cadenaJSON;
        $pathOrigen = $_FILES['foto']['tmp_name'];   
        $perro = json_decode($cadenaJSON);    
        $pathDestino = "./fotos/".$perro->_pathFoto; 
        move_uploaded_file($pathOrigen, $pathDestino);
        

        $objCon=new Conexion();
        $conexion=$objCon->GetConexion();
        $sentencia=$conexion->prepare('INSERT INTO perros (tamanio,edad,precio,nombre,raza,path_foto) VALUES (:tamanio,:edad,:precio,:nombre,:raza,:path_foto)');
        $sentencia->bindValue(':tamanio',$perro->_tamaño,PDO::PARAM_STR);
        $sentencia->bindValue(':edad',$perro->_edad,PDO::PARAM_INT);
        $sentencia->bindValue(':precio',$perro->_precio,PDO::PARAM_INT);
        $sentencia->bindValue(':nombre',$perro->_nombre,PDO::PARAM_STR);
        $sentencia->bindValue(':raza',$perro->_raza,PDO::PARAM_STR);
        $sentencia->bindValue(':path_foto',$perro->_pathFoto,PDO::PARAM_STR);
 
    }
    else
    {
        echo ":(";
    }


?>