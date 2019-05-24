<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require_once './vendor/autoload.php';
require_once '/clases/AccesoDatos.php';
require_once '/clases/empleado.php';

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$app = new \Slim\App(["settings" => $config]);

$app->post("/login", function($req, $res, $args)
{
    $legajo = $_POST["legajo"];
    $clave = $_POST["clave"];

    $objetoAcceso = AccesoDatos::dameUnObjetoAcceso();
    $consulta = $objetoAcceso->RetornarConsulta("SELECT * FROM empleados WHERE legajo = :legajo AND clave = :clave");
    $consulta->bindValue(":legajo", $legajo);
    $consulta->bindValue(":clave", $clave);
    $consulta->setFetchMode(PDO::FETCH_ASSOC);
    $consulta->execute();
    $empleadoBD = $consulta->fetch();
    $objResponse = new stdClass();
    if($empleadoBD != null)
    {
        $empleado = new stdClass();
        $empleado->legajo = $empleadoBD["legajo"];
        $empleado->clave = $empleadoBD["clave"];
        $objResponse->exito = true;
        $objResponse->objEmpleado = $empleado;
    }
    else
    {
        $objResponse->exito = false;
        $objResponse->objEmpleado = null;
    }

    return json_encode($objResponse);
});

$app->run();