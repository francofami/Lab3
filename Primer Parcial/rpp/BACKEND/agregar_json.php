<?php

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