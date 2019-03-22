function CalcularCubo(numero) {
    var cubo;
    cubo = Math.pow(numero, 3);
    return cubo;
}
console.log(CalcularCubo(2));
var funcion = CalcularCubo; //Declaro funcion que invoca a CalcularCubo
console.log(funcion(3));
