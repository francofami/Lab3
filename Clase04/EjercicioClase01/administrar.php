<?php
 
    switch($_REQUEST["accion"])
    {
        case 1:
        {
            echo($_REQUEST["nombre"]);
        }
        break;
        
        case 2:
        {
            $archivo = fopen("mensaje.txt", "a+");
            
            if(fwrite($archivo, $_REQUEST["nombre"]."\r\n") != 0)
            {
                fclose($archivo);
                echo 1; //Esto hace que el responseText sea "1"
            }
            else
            {
                fclose($archivo);
                echo 0; //Esto hace que el responseText sea "1"
            }
        }
        break;

        case 3:
        {
            $archivo = fopen("mensaje.txt", "r");

            ?>               
    
            <table border="1" style="width:0%;height:0%">
            <caption>Nombres</caption>

            <?php

            while(!feof($archivo))
            { 

                $mensaje = fgets($archivo); 

                ?>
                
                <tr><td> <?php echo $mensaje ?> </td></tr>
                
                <?php  
            }     

            ?>

            </table>

            <?php

            fclose($archivo);
        }
        break;

        case 4:
        {
            $archivo = fopen("mensaje.txt", "r");

            $flag = 0;

            while(!feof($archivo))
            { 
                $mensaje = trim(fgets($archivo)); //El trim le quita los \r\n

                var_dump($_REQUEST["nombre"]);
                var_dump($mensaje);

                if(strcmp($_REQUEST["nombre"], $mensaje) == 0)
                {
                    $flag = 1;
                    break;
                }

            } 
            
            fclose($archivo);

            if($flag==0)
            {           
                echo "1";
            }
            else
            {
                echo "0";
            }   
        }
        break;
    }
    

?>