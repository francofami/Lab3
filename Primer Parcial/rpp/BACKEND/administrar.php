<?php

include_once ("AccesoDatos.php");


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

        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
            
        $consulta = $objetoAccesoDato->RetornarConsulta("SELECT tamanio,edad,precio,nombre,raza,path_foto FROM perros");
        
        $consulta->execute();

        $consulta->setFetchMode(PDO::FETCH_ASSOC);  

        $retorno="<table border='1' style='width:0%;height:0%'><tr><th>Tamaño</th><th>Edad</th><th>Precio</th><th>Nombre</th><th>Raza</th><th>Foto</th><th>Modificar</th><th>Eliminar</th></tr>";



        while($perro=$consulta->fetch()){
            $perroJsonizado = "{'_nombre':'".$perro["nombre"]."', '_raza':'".$perro['raza']."','_pathFoto':'".$perro['path_foto']."','_edad':".$perro['edad'].",'_tamaño':'".$perro['tamanio']."','_precio':'".$perro['precio']."'}";
            $modificar = "<td><button onclick='PrimerParcial.Manejadora.MostrarModificar(".'.$perroJsonizado.'.")'>M</button>";
            $eliminar = "<button onclick='PrimerParcial.Manejadora.EliminarPerro(".$perroJsonizado.")'>X</button></td>";

            $retorno.="<tr><td>".$perro["tamanio"]."</td><td>".$perro["edad"]."</td><td>".$perro["precio"]."</td><td>".$perro["nombre"]."</td><td>".$perro["raza"]."</td><td><img src='"."./BACKEND/fotos/".$perro["path_foto"]."'widht=50 height=50/></td>".$modificar.$eliminar."</tr>";
        }
        $retorno.="</table>";


        echo $retorno;

    break;
    case'comparar':

        $retorno = "0";

        $cadenaJSON = isset($_POST['cadenaJson']) ? $_POST['cadenaJson'] : null;
        $objJson = json_decode($cadenaJSON);   


           	$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
        
            	$consulta = $objetoAccesoDato->RetornarConsulta("SELECT tamanio,edad,precio,nombre,raza,path_foto FROM perros");
                  
            	$consulta->execute();

            	$consulta->setFetchMode(PDO::FETCH_ASSOC);  

            	while ($perro = $consulta->fetch())
		        {
                	if($perro["path_foto"] != "")
                    {
                        if($objJson->_edad == $perro["edad"] && $objJson->_raza == $perro["raza"])
                        {
                            $retorno = "1";
                        }
                    }
                	else
                    if($objJson->_edad == $perro["edad"] && $objJson->_raza == $perro["raza"])
                    {
                        $retorno = "1";
                    }
            	}	                                          

            echo $retorno;

    break;
    case 'eliminarbd':
    $cadenaJSON = isset($_POST['cadenaJson']) ? $_POST['cadenaJson'] : null;
    $objJson = json_decode($cadenaJSON); 
    $retorno = false;
    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
    $consulta =$objetoAccesoDato->RetornarConsulta("DELETE FROM perros WHERE edad = :edadAct AND raza = :razaAct");
    $consulta->bindValue(':edadAct', $objJson->_edad, PDO::PARAM_STR);
    $consulta->bindValue(':razaAct', $objJson->_raza, PDO::PARAM_STR);     
    if($consulta->rowCount() > 0) 
    {
        $retorno = true;
    }
    echo $retorno;
    break;
    default:
        echo ":(";
        break;
}