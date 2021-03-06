
/// <reference path="./Empleado.ts" />

//let empleado01 : Ejercicio03.Empleado = new Ejercicio03.Empleado("Juan", "Perez", 25123123, "M", 123123, 50000);

//console.log(empleado01.ToString());

window.onload = function()
{
    MostrarListado();
}

function MostrarListado()
{
    let xhr : XMLHttpRequest = new XMLHttpRequest();

    xhr.open('POST', './admin.php', true);
    //xhr.setRequestHeader("enctype", "multipart/form-data");
    //para enviar solo texto por post
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhr.send("op=MostrarListado");

    xhr.onreadystatechange = () => {

        if (xhr.readyState == 4 && xhr.status == 200) {

            //console.log(xhr.responseText);
            
            let tabla = xhr.responseText;
        
            (<HTMLDivElement> document.getElementById("tabla")).innerHTML = tabla;        
            
        }
    }
}

function SubirFoto() : void
{
    let xhr : XMLHttpRequest = new XMLHttpRequest();
    let foto : any = (<HTMLInputElement> document.getElementById("foto"));
    let nombre : string = (<HTMLInputElement> document.getElementById("nombre")).value;
    let apellido : string = (<HTMLInputElement> document.getElementById("apellido")).value;
    let dni : number = +(<HTMLInputElement> document.getElementById("dni")).value;
    let sexo : string = (<HTMLInputElement> document.getElementById("sexo")).value;
    let legajo : number = +(<HTMLInputElement> document.getElementById("legajo")).value;
    let sueldo : number = +(<HTMLInputElement> document.getElementById("sueldo")).value;
    let clave : string = (<HTMLInputElement> document.getElementById("clave")).value;
    let form : FormData = new FormData();
    //form.append('foto', foto.files[0]);
    form.append('nombre', nombre);
    form.append('apellido', apellido);
    form.append('dni', dni.toString());
    form.append('sexo', sexo);
    form.append('legajo', legajo.toString());
    form.append('sueldo', sueldo.toString());
    form.append('clave', clave);
    form.append('op', "subirFoto");
    xhr.open('POST', './admin.php', true);
    xhr.setRequestHeader("enctype", "multipart/form-data");
    xhr.send(form);

    xhr.onreadystatechange = () => {

        if (xhr.readyState == 4 && xhr.status == 200) {

            console.log(xhr.responseText);
            
            let retJSON = JSON.parse(xhr.responseText);
            if(!retJSON.Ok){
                console.error("NO se subió la foto!!!");
            }
            else{
                console.info("Foto subida OK!!!");
                (<HTMLImageElement> document.getElementById("imgFoto")).src = "./" + retJSON._foto;      
                MostrarListado();  
            }
        }
    }
}

function Eliminar(obj : any)
{
    console.log(obj);

    if(!confirm("Está seguro que desea eliminar a: "+ obj._nombre))
    {
        return;
    }
    let xhr : XMLHttpRequest = new XMLHttpRequest();

    xhr.open('POST', './admin.php', true);
    xhr.setRequestHeader("enctype", "multipart/form-data"); //si envio json uso esto
    //para enviar solo texto por post
    //xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    let form : FormData = new FormData();
    form.append('obj', JSON.stringify(obj));
    form.append('op', 'EliminarDelListado');
    xhr.send(form);
    
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) 
        {
            console.log(xhr.responseText);
            MostrarListado();
        }
        
    }
    
}

function MostrarModificar(obj :any)
{
    (<HTMLInputElement> document.getElementById("nombre")).value = obj._nombre;
    (<HTMLInputElement> document.getElementById("apellido")).value = obj._apellido;
    (<HTMLInputElement> document.getElementById("dni")).value = obj._dni;
    (<HTMLInputElement> document.getElementById("sexo")).value = obj._sexo;
    (<HTMLInputElement> document.getElementById("legajo")).value = obj._legajo;
    (<HTMLInputElement> document.getElementById("sueldo")).value = obj._sueldo;
    (<HTMLImageElement> document.getElementById("imgFoto")).src = obj._foto;
    (<HTMLInputElement> document.getElementById("legajo")).disabled = true ;  //Para que no se pueda ver
    
}

function Modificar()
{ 
    let xhr : XMLHttpRequest = new XMLHttpRequest();

    xhr.open('POST', './admin.php', true);
    xhr.setRequestHeader("enctype", "multipart/form-data"); //si envio json uso esto
    //para enviar solo texto por post
    //xhr.setRequestH eader("content-type","application/x-www-form-urlencoded");

    let foto : any = (<HTMLInputElement> document.getElementById("foto"));
    
    let nombre : string = (<HTMLInputElement> document.getElementById("nombre")).value;
    let apellido : string = (<HTMLInputElement> document.getElementById("apellido")).value;
    let dni : number = +(<HTMLInputElement> document.getElementById("dni")).value;
    let sexo : string = (<HTMLInputElement> document.getElementById("sexo")).value;
    let legajo : number = +(<HTMLInputElement> document.getElementById("legajo")).value;
    let sueldo : number = +(<HTMLInputElement> document.getElementById("sueldo")).value;
    let clave : string = (<HTMLInputElement> document.getElementById("clave")).value;
    let form : FormData = new FormData();


    //form.append('foto', foto.files[0]);
    form.append('nombre', nombre);
    form.append('apellido', apellido);
    form.append('dni', dni.toString());
    form.append('sexo', sexo);
    form.append('legajo', legajo.toString());
    form.append('sueldo', sueldo.toString());
    form.append('clave', clave);
    form.append('op', "Modificar");
    xhr.open('POST', './admin.php', true);
    xhr.setRequestHeader("enctype", "multipart/form-data");
    xhr.send(form);

    xhr.onreadystatechange = () => {

        if (xhr.readyState == 4 && xhr.status == 200) {

            console.log(xhr.responseText);
            
            let retJSON = JSON.parse(xhr.responseText);
            
            //console.log(retJSON._foto);
            
            (<HTMLImageElement> document.getElementById("imgFoto")).src = "./" + retJSON._foto;        
            MostrarListado();              
        }    
    }
}

function Login()
{
    let xhr : XMLHttpRequest = new XMLHttpRequest();
    let legajoIngreso : number = +(<HTMLInputElement> document.getElementById("legajoIngreso")).value;
    let claveIngreso : string = (<HTMLInputElement> document.getElementById("claveIngreso")).value;
    let form : FormData = new FormData();

    form.append('legajoIngreso', legajoIngreso.toString());
    form.append('claveIngreso', claveIngreso);
    form.append('op', "login");
    xhr.open('POST', './admin.php', true);
    xhr.setRequestHeader("enctype", "multipart/form-data");
    xhr.send(form);

    xhr.onreadystatechange = () => {

        if (xhr.readyState == 4 && xhr.status == 200) {

            console.log(xhr.responseText);
            
            let retJSON = JSON.parse(xhr.responseText);
            if(!retJSON.Ok){
                console.error("NO se subió la foto!!!");
            }
            else{
                console.info("Foto subida OK!!!");
                (<HTMLImageElement> document.getElementById("imgFoto")).src = "./" + retJSON._foto;      
                MostrarListado();  
            }
        }
    }
}

