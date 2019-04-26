<?php

    $json = json_decode($_POST["productos"]);

    $productos = array();

    for($i=0;$i<=2;$i++)
    {
        $producto = new Producto($json[$i]->codigoBarra, $json[$i]->nombre, $json[$i]->precio);
        array_push($productos, $producto);
        echo $productos[$i]->codigoBarra."\n";
        echo $productos[$i]->nombre."\n";
        echo $productos[$i]->precio."\n";
    }  

    class Producto
    {
        public $codigoBarra;
        public $nombre;
        public $precio;


        public function __construct($codigoBarra, $nombre, $precio)
        {
            $this->codigoBarra = $codigoBarra;
            $this->nombre = $nombre;
            $this->precio = $precio;
        }


    }

?>