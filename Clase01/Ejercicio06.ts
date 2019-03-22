function CalcularCubo(numero: number) : number 
{ 
    var  cubo: number;

    cubo = Math.pow(numero, 3);

    return cubo;
}

console.log(CalcularCubo(2));

var funcion: Function = CalcularCubo; //Declaro funcion que invoca a CalcularCubo

console.log(funcion(3));
