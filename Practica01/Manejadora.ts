/// <reference path="./Televisor.ts" />

window.onload = function()
{
    PrimerParcial.Manejadora.MostrarTelevisores();
}


namespace PrimerParcial
{
    export class Manejadora
    {
        

        public static AgregarTelevisor() :void
        {
            let xhr : XMLHttpRequest = new XMLHttpRequest();
  
            let codigo : number = +(<HTMLInputElement> document.getElementById("codigo")).value;
            let marca : string = (<HTMLInputElement> document.getElementById("marca")).value;
            let precio : number = +(<HTMLInputElement> document.getElementById("precio")).value;
            let tipo : string = (<HTMLInputElement> document.getElementById("tipo")).value;
            let paisOrigen : string = (<HTMLInputElement> document.getElementById("paisOrigen")).value;
            let fotoInput : any = <HTMLInputElement> document.getElementById("foto");
            let path: string = (<HTMLInputElement> document.getElementById("foto")).value;
            let pathFoto : string = (path.split('\\'))[2];
            let form : FormData = new FormData();

            let objTelevisor : Entidades.Televisor;
            objTelevisor = new Entidades.Televisor(codigo, marca, precio, tipo, paisOrigen, pathFoto);

            let objTelevisorJSON = objTelevisor.ToJSON();

            form.append('caso', 'agregar');
            form.append('cadenaJson', JSON.stringify(objTelevisorJSON));
            console.log(objTelevisorJSON);
            form.append('foto', fotoInput.files[0]);
            xhr.open('POST', './BACKEND/administrar.php', true);
            xhr.setRequestHeader("enctype", "multipart/form-data");
            xhr.send(form);

            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4 && xhr.status == 200) {

                    console.log(xhr.responseText);
            
                    let retJSON = JSON.parse(xhr.responseText);
            
                    console.log(retJSON._foto);
            
                    (<HTMLImageElement> document.getElementById("imgFoto")).src = "./BACKEND/fotos/" + retJSON._pathFoto;    
                    //MostrarListado();              
                }    
            }
        }

        public static MostrarTelevisores()
        {
            let xhr : XMLHttpRequest = new XMLHttpRequest();

            xhr.open('POST', './BACKEND/administrar.php', true);
            //xhr.setRequestHeader("enctype", "multipart/form-data");
            //para enviar solo texto por post
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhr.send("caso=traer");

            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4 && xhr.status == 200) {

                    //console.log(xhr.responseText);
            
                    let televisores = xhr.responseText;

                    let televisoresJSON = JSON.parse(televisores);

                    let tabla = "<table border='1' style='width:0%;height:0%'><tr><th>Tipo</th><th>Pais</th><th>Codigo</th><th>Marca</th><th>Precio</th><th>Foto</th><th>Acciones</th></tr>";

                    let televisor;

                    for(televisor of televisoresJSON)
                    {

                        let modificar = "<td><button onclick='PrimerParcial.Manejadora.MostrarModificar("+JSON.stringify(televisor)+")'>M</button>";
                        let eliminar = "<button onclick='PrimerParcial.Manejadora.Eliminar("+JSON.stringify(televisor)+")'>X</button></td>"; 

                        tabla += "<tr><td>"+(televisor)._tipo+"</td><td>"+(televisor)._paisOrigen+"</td><td>"+(televisor)._codigo+"</td><td>"+(televisor)._marca+"</td><td>"+(televisor)._precio+"</td><td><img src='"+"./BACKEND/fotos/"+(televisor)._pathFoto+"'widht=50 height=50/></td>"+modificar+eliminar+"</tr>";
                    }
        
                    tabla += "</table>";
        
                    (<HTMLDivElement> document.getElementById("divTabla")).innerHTML = tabla;        
            
                }
            }   
        }

        public static MostrarModificar(televisor :any)
        {

            (<HTMLInputElement> document.getElementById("tipo")).value = televisor._tipo;
            (<HTMLInputElement> document.getElementById("paisOrigen")).value = televisor._paisOrigen;
            (<HTMLInputElement> document.getElementById("codigo")).value = televisor._codigo;
            (<HTMLInputElement> document.getElementById("marca")).value = televisor._marca;
            (<HTMLInputElement> document.getElementById("precio")).value = televisor._precio;
            (<HTMLImageElement> document.getElementById("imgFoto")).src = "./BACKEND/fotos/"+televisor._pathFoto;
            (<HTMLInputElement> document.getElementById("codigo")).disabled = true ;  //Para que no se pueda ver
        }

        public static Eliminar(televisor :any)
        {

        }   

        public static GuardarEnLocalStorage()  : void 
        {
            let xhr : XMLHttpRequest = new XMLHttpRequest();

            xhr.open('POST', './BACKEND/administrar.php', true);
            //xhr.setRequestHeader("enctype", "multipart/form-data");
            //para enviar solo texto por post
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhr.send("caso=traer");

            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4 && xhr.status == 200) {

                    console.log(xhr.responseText);        
                }    
            }
        }
    }
}