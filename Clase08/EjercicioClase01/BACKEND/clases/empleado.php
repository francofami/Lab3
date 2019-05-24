<?php
class empleado
{
	public $legajo;
 	public $clave;
  	public $cantante;
  	public $año;


/* inicio funciones especiales para slimFramework*/

 	public function TraerUno($request, $response, $args) {
     	$legajo=$args['legajo'];
    	$elempleado=empleado::TraerUnempleado($legajo);
     	$newResponse = $response->withJson($elempleado, 200);  
    	return $newResponse;
	}
	
    public function TraerTodos($request, $response, $args) {
      	$todosLosempleados=empleado::TraerTodoLosempleados();
     	$newResponse = $response->withJson($todosLosempleados, 200);  
    	return $newResponse;
	}
	
    public function CargarUno($request, $response, $args) {
     	$response->getBody()->write("<h1>Cargar uno nuevo</h1>");
      	return $response;
    }
	
	public function BorrarUno($request, $response, $args) {
     	$ArrayDeParametros = $request->getParsedBody();
     	$legajo=$ArrayDeParametros['legajo'];
     	$empleado= new empleado();
     	$empleado->legajo=$legajo;
     	$cantlegajoadDeBorrados=$empleado->Borrarempleado();

     	$objDelaRespuesta= new stdclass();
	    $objDelaRespuesta->cantlegajoad=$cantlegajoadDeBorrados;
	    if($cantlegajoadDeBorrados>0)
	    	{
	    		 $objDelaRespuesta->resultado="algo borro!!!";
	    	}
	    	else
	    	{
	    		$objDelaRespuesta->resultado="no Borro nada!!!";
	    	}
	    $newResponse = $response->withJson($objDelaRespuesta, 200);  
      	return $newResponse;
    }
	
	public function ModificarUno($request, $response, $args) {
		$ArrayDeParametros = $request->getParsedBody();
	    //var_dump($ArrayDeParametros);    	
	    $miempleado = new empleado();
	    $miempleado->legajo=$ArrayDeParametros['legajo'];
	    $miempleado->clave=$ArrayDeParametros['clave'];
	    $miempleado->cantante=$ArrayDeParametros['cantante'];
	    $miempleado->año=$ArrayDeParametros['anio'];

	   	$resultado =$miempleado->ModificarempleadoParametros();
	   	$objDelaRespuesta= new stdclass();
		$objDelaRespuesta->resultado=$resultado;
		return $response->withJson($objDelaRespuesta, 200);		
    }

/* final funciones especiales para slimFramework*/


  	public function Borrarempleado()
	 {
	 		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				delete 
				from empleados 				
				WHERE legajo=:legajo");	
				$consulta->bindValue(':legajo',$this->legajo, PDO::PARAM_INT);		
				$consulta->execute();
				return $consulta->rowCount();
	 }

	public static function BorrarempleadoPorAnio($año)
	 {

			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				delete 
				from empleados 				
				WHERE jahr=:anio");	
				$consulta->bindValue(':anio',$año, PDO::PARAM_INT);		
				$consulta->execute();
				return $consulta->rowCount();

	 }
	public function Modificarempleado()
	 {

			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				update empleados 
				set titel='$this->clave',
				interpret='$this->cantante',
				jahr='$this->año'
				WHERE legajo='$this->legajo'");
			return $consulta->execute();

	 }
	
  
	 public function InsertarElempleado()
	 {
				$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
				$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into empleados (titel,interpret,jahr)values('$this->clave','$this->cantante','$this->año')");
				$consulta->execute();
				return $objetoAccesoDato->RetornarUltimolegajoInsertado();
				

	 }

	  public function ModificarempleadoParametros()
	 {
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				update empleados 
				set titel=:clave,
				interpret=:cantante,
				jahr=:anio
				WHERE legajo=:legajo");
			$consulta->bindValue(':legajo',$this->legajo, PDO::PARAM_INT);
			$consulta->bindValue(':clave',$this->clave, PDO::PARAM_INT);
			$consulta->bindValue(':anio', $this->año, PDO::PARAM_STR);
			$consulta->bindValue(':cantante', $this->cantante, PDO::PARAM_STR);
			return $consulta->execute();
	 }

	 public function InsertarElempleadoParametros()
	 {
				$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
				$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into empleados (titel,interpret,jahr)values(:clave,:cantante,:anio)");
				$consulta->bindValue(':clave',$this->clave, PDO::PARAM_INT);
				$consulta->bindValue(':anio', $this->año, PDO::PARAM_STR);
				$consulta->bindValue(':cantante', $this->cantante, PDO::PARAM_STR);
				$consulta->execute();		
				return $objetoAccesoDato->RetornarUltimolegajoInsertado();
	 }
	 public function Guardarempleado()
	 {

	 	if($this->legajo>0)
	 		{
	 			$this->ModificarempleadoParametros();
	 		}else {
	 			$this->InsertarElempleadoParametros();
	 		}

	 }


  	public static function TraerTodoLosempleados()
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("select legajo,titel as clave, interpret as cantante,jahr as año from empleados");
			$consulta->execute();			
			return $consulta->fetchAll(PDO::FETCH_CLASS, "empleado");		
	}
	public static function TraerUnempleado($legajo) 
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("select legajo, titel as clave, interpret as cantante,jahr as año from empleados where legajo = $legajo");
			$consulta->execute();
			$empleadoBuscado= $consulta->fetchObject('empleado');
			return $empleadoBuscado;				

			
	}
	public static function TraerUnempleadoAnio($legajo,$anio) 
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("select  titel as clave, interpret as cantante,jahr as año from empleados  WHERE legajo=? AND jahr=?");
			$consulta->execute(array($legajo, $anio));
			$empleadoBuscado= $consulta->fetchObject('empleado');
      		return $empleadoBuscado;				

			
	}
	public static function TraerUnempleadoAnioParamNombre($legajo,$anio) 
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("select  titel as clave, interpret as cantante,jahr as año from empleados  WHERE legajo=:legajo AND jahr=:anio");
			$consulta->bindValue(':legajo', $legajo, PDO::PARAM_INT);
			$consulta->bindValue(':anio', $anio, PDO::PARAM_STR);
			$consulta->execute();
			$empleadoBuscado= $consulta->fetchObject('empleado');
      		return $empleadoBuscado;				

			
	}
	public static function TraerUnempleadoAnioParamNombreArray($legajo,$anio) 
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("select  titel as clave, interpret as cantante,jahr as año from empleados  WHERE legajo=:legajo AND jahr=:anio");
			$consulta->execute(array(':legajo'=> $legajo,':anio'=> $anio));
			$consulta->execute();
			$empleadoBuscado= $consulta->fetchObject('empleado');
      		return $empleadoBuscado;				

			
	}
	public function mostrarDatos()
	{
	  	return "Metodo mostar:".$this->clave."  ".$this->cantante."  ".$this->año;
	}

}