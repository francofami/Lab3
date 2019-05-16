/// <reference path="./Televisor.ts" />


namespace PrimerParcial
{
    export class Manejadora
    {
        public static AgregarTelevisor() :void
        {
            let xhr : XMLHttpRequest = new XMLHttpRequest();

            xhr.open('POST', './BACKEND/administrar.php', true);
            xhr.setRequestHeader("enctype", "multipart/form-data");
  
            let codigo : number = +(<HTMLInputElement> document.getElementById("codigo")).value;
            let marca : string = (<HTMLInputElement> document.getElementById("marca")).value;
            let precio : number = +(<HTMLInputElement> document.getElementById("precio")).value;
            let tipo : string = (<HTMLInputElement> document.getElementById("tipo")).value;
            let paisOrigen : string = (<HTMLInputElement> document.getElementById("paisOrigen")).value;
            let pathFoto : any = (<HTMLInputElement> document.getElementById("foto"));
            let form : FormData = new FormData();

            let objTelevisor : Entidades.Televisor;
            objTelevisor = new Entidades.Televisor(codigo, marca, precio, tipo, paisOrigen, pathFoto);

            let objTelevisorJSON = objTelevisor.ToJSON();

            form.append('televisor', JSON.stringify(objTelevisorJSON));
            console.log(objTelevisorJSON);
            form.append('op', "Agregar");
            xhr.open('POST', './BACKEND/administrar.php', true);
            xhr.setRequestHeader("enctype", "multipart/form-data");
            xhr.send(form);

            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4 && xhr.status == 200) {

                    console.log(xhr.responseText);
            
                    let retJSON = JSON.parse(xhr.responseText);
            
                    //console.log(retJSON._foto);
            
                    (<HTMLImageElement> document.getElementById("imgFoto")).src = "./" + retJSON._pathFoto;        
                    //MostrarListado();              
                }    
            }
        }
    }
}