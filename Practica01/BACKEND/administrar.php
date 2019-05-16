<?php

    $op = isset($_POST["op"]) ? $_POST["op"] : null;

    switch($op)
    {
        case "Agregar":
        $televisor = json_encode($_POST["televisor"]);

        $file = fopen("./televisores.json", "a");
		fwrite($file, $televisor . "\r\n");
        fclose($file);

        $pathOrigen = $_FILES['foto']['tmp_name'];
        
        $objJson = json_decode($televisor);   
        $pathDestino = "./fotos/".$objJson->pathFoto;
        
        move_uploaded_file($pathOrigen, $pathDestino);

        echo json_encode($resultado);
        break;

        

        default: 
        echo ":(";
    }

?>