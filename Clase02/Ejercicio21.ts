/* 
21- Se necesita hacer una página que contenga dos cuadros de texto (dónde se ingresarán
números), un botón (con la leyenda ‘Calcular’) y cuatro controles de tipo ‘radioButton’ (suma,
resta, multiplicación y división). Cuando se pulsa el botón una función deberá mostrar el
resultado (en la consola y en otro cuadro de texto), de acuerdo al tipo de operación que el
usuario eligió. Utilizar la estructura ‘switch’
*/

function ObtenerDatos():void
{
    let numero1 : number = +(<HTMLInputElement> document.getElementById("numero1")).value; //Con el + casteo
    let numero2 : number = +(<HTMLInputElement> document.getElementById("numero2")).value;
    let operando = document.getElementsByName("operando"); //Tipo radio - Array de datos
    
    for(var i=0; i<operando.length; i++)
    {
        if((<HTMLInputElement> operando[i]).checked) //Si el item esta checkeado ahi me entero cual es
        {
            let resultado : number = Calcular(numero1, numero2, (<HTMLInputElement> operando[i]).value);

            //alert("El resultado es: " + resultado);
            (<HTMLInputElement> document.getElementById("resulta2")).value = resultado.toString();
            console.log(resultado);
        }
    }
}

function Calcular(numero1 : number,numero2 : number,operando : string):number
{
    let retorno : number = 0;

    switch(operando)
    {
        case "+":
        {
            retorno = numero1 + numero2;
        }
        break;

        case "-":
        {
            retorno = numero1 - numero2;
        }
        break;

        case "*":
        {
            retorno = numero1 * numero2;
        }
        break;

        case "/":
        {
            retorno = numero1 / numero2;
        }
    }

    return retorno;
}