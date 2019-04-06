/*
21- Se necesita hacer una página que contenga dos cuadros de texto (dónde se ingresarán
números), un botón (con la leyenda ‘Calcular’) y cuatro controles de tipo ‘radioButton’ (suma,
resta, multiplicación y división). Cuando se pulsa el botón una función deberá mostrar el
resultado (en la consola y en otro cuadro de texto), de acuerdo al tipo de operación que el
usuario eligió. Utilizar la estructura ‘switch’
*/
function ObtenerDatos() {
    var numero1 = +document.getElementById("numero1").value; //Con el + casteo
    var numero2 = +document.getElementById("numero2").value;
    var operando = document.getElementsByName("operando"); //Tipo radio - Array de datos
    for (var i = 0; i < operando.length; i++) {
        if (operando[i].checked) //Si el item esta checkeado ahi me entero cual es
         {
            var resultado = Calcular(numero1, numero2, operando[i].value);
            //alert("El resultado es: " + resultado);
            document.getElementById("resulta2").value = resultado.toString();
            console.log(resultado);
        }
    }
}
function Calcular(numero1, numero2, operando) {
    var retorno = 0;
    switch (operando) {
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
