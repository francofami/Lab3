function CalcularCubo(numero: number) : number 
{ 
    var  cubo: number;

    cubo = Math.pow(numero, 3);

    return cubo;
}

//Otra forma de hacerlo: var CalcularCubo = (numero: number)  => Math.pow(numero, 3);

console.log(CalcularCubo(2));

var funcion: Function = CalcularCubo; //Declaro funcion que invoca a CalcularCubo

console.log(funcion(3));