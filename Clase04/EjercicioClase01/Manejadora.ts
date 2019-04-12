namespace Ajax
{
    export function Saludar() : void
    {
        let xhttp : XMLHttpRequest = new XMLHttpRequest();

        xhttp.open("GET", "administrar.php", true);

        xhttp.send();

        xhttp.onreadystatechange= () => 
        {
            if (xhttp.readyState == 4 && xhttp.status == 200) 
            {
                //alert(xhttp.responseText);
                alert("Hola mundo");
                console.log("Hola mundo");
                (<HTMLDivElement>document.getElementById("div_mostrar")).innerHTML = "Hi World";
            }
            //alert(xhttp.readyState);
            //console.log(xhttp.readyState);
            //(<HTMLDivElement>document.getElementById("div_mostrar")).innerHTML = xhttp.readyState;
        }
    }

    export function Ingresar() : void
    {
        if(Verificar() == true)
        {
            alert("El nombre ingresado ya existe");
        }
        else
        {
        let xhttp : XMLHttpRequest = new XMLHttpRequest();

        let nombre : string = (<HTMLInputElement> document.getElementById("nombre")).value

        xhttp.open("POST", "administrar.php", true);

        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");

        xhttp.send("nombre="+nombre+"&accion="+2);

        xhttp.onreadystatechange= () => 
        {
            if (xhttp.readyState == 4 && xhttp.status == 200) 
            {
                //alert(xhttp.responseText);
                console.log(xhttp.responseText);
                (<HTMLDivElement>document.getElementById("div_mostrar")).innerHTML = xhttp.responseText;

                if(xhttp.responseText == "1")
                {
                    alert("Se pudo ingresar el nombre: "+ nombre);
                    Mostrar();
                }
                else
                {
                    alert("No se pudo ingresar el nombre: "+ nombre);
                }
            }
            
        }
        }
    }

    function Mostrar() : void
    {
        let xhttp : XMLHttpRequest = new XMLHttpRequest();

        let nombre : string = (<HTMLInputElement> document.getElementById("nombre")).value

        xhttp.open("POST", "administrar.php", true);

        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");

        xhttp.send("nombre="+nombre+"&accion="+3);

        xhttp.onreadystatechange= () => 
        {
            if (xhttp.readyState == 4 && xhttp.status == 200) 
            {
                //alert(xhttp.responseText);
                console.log(xhttp.responseText);
                (<HTMLDivElement>document.getElementById("div_mostrar")).innerHTML = xhttp.responseText;
            }
            
        }
    }

    function Verificar() : bool
    {
        var retorno : bool;

        let xhttp : XMLHttpRequest = new XMLHttpRequest();

        let nombre : string = (<HTMLInputElement> document.getElementById("nombre")).value

        xhttp.open("POST", "administrar.php", true);

        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");

        xhttp.send("nombre="+nombre+"&accion="+4);

        xhttp.onreadystatechange= () => 
        {
            if (xhttp.readyState == 4 && xhttp.status == 200) 
            {
                //alert(xhttp.responseText);
                //console.log(xhttp.responseText);
                //(<HTMLDivElement>document.getElementById("div_mostrar")).innerHTML = xhttp.responseText;

                if(xhttp.responseText == "0")
                {
                    retorno = true;
                }
                else
                {
                    retorno = false;
                }
            }
            
        }

        return retorno;
    }

}