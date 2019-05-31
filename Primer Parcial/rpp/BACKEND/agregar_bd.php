<?php 

    include_once ("AccesoDatos.php");


        $cadenaJSON = isset($_POST['cadenaJson']) ? $_POST['cadenaJson'] : null;
        echo $cadenaJSON;
        $pathOrigen = $_FILES['foto']['tmp_name'];   
        $perro = json_decode($cadenaJSON);    
        $pathDestino = "./fotos/".$perro->_pathFoto; 
        move_uploaded_file($pathOrigen, $pathDestino);


        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
        $consulta =$objetoAccesoDato->RetornarConsulta("INSERT INTO perros (tamanio, edad, precio, nombre, raza, path_foto)"       
        . "VALUES(:tamanio, :edad, :precio, :nombre, :raza, :path_foto)");
            $consulta->bindValue(':tamanio', $perro->_tamaño, PDO::PARAM_STR);
            $consulta->bindValue(':edad',$perro->_edad,PDO::PARAM_INT);;
            $consulta->bindValue(':precio',$perro->_precio,PDO::PARAM_STR);
            $consulta->bindValue(':nombre',$perro->_nombre,PDO::PARAM_STR);
            $consulta->bindValue(':raza',$perro->_raza,PDO::PARAM_STR);
            $consulta->bindValue(':path_foto',$perro->_pathFoto,PDO::PARAM_STR);
            

            $consulta->execute();

?>