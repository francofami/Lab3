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

                echo 1;
            }
            else
            {
                fclose($archivo);
                echo 0;
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
    }
    

?>