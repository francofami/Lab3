/// <reference path="./Perro.ts" />

namespace PrimerParcial
{
    export class Manejadora
    {
        public static AgregarPerroJSON() :void
        {
            let xhr : XMLHttpRequest = new XMLHttpRequest();
  
            let tamaño : string = (<HTMLInputElement> document.getElementById("tamaño")).value;
            let edad : number = +(<HTMLInputElement> document.getElementById("edad")).value;
            let precio : number = +(<HTMLInputElement> document.getElementById("precio")).value;
            let nombre : string = (<HTMLInputElement> document.getElementById("nombre")).value;
            let raza : string = (<HTMLInputElement> document.getElementById("raza")).value;
            let fotoInput : any = <HTMLInputElement> document.getElementById("foto");
            let path: string = (<HTMLInputElement> document.getElementById("foto")).value;
            let pathFoto : string = (path.split('\\'))[2];
            let form : FormData = new FormData();

            let perroAux : Entidades.Perro;
            perroAux = new Entidades.Perro(tamaño, edad, precio, nombre, raza, pathFoto);

            let perroJSON = perroAux.ToJSON();

            form.append('caso', 'agregar');
            form.append('cadenaJson', JSON.stringify(perroJSON));
            console.log(perroJSON);
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

        public static MostrarPerrosJSON()
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
            
                    let perros = xhr.responseText;

                    let perrosJSON = JSON.parse(perros);

                    let tabla = "<table border='1' style='width:0%;height:0%'><tr><th>Tamaño</th><th>Edad</th><th>Precio</th><th>Nombre</th><th>Raza</th><th>Foto</th><th>Acciones</th></tr>";

                    let perro;

                    for(perro of perrosJSON)
                    {

                        let modificar = "<td><button onclick='PrimerParcial.Manejadora.MostrarModificar("+JSON.stringify(perro)+")'>M</button>";
                        let eliminar = "<button onclick='PrimerParcial.Manejadora.Eliminar("+JSON.stringify(perro)+")'>X</button></td>"; 

                        tabla += "<tr><td>"+(perro)._tamaño+"</td><td>"+(perro)._edad+"</td><td>"+(perro)._precio+"</td><td>"+(perro)._nombre+"</td><td>"+(perro)._raza+"</td><td><img src='"+"./BACKEND/fotos/"+(perro)._pathFoto+"'widht=50 height=50/></td>"+modificar+eliminar+"</tr>";
                    }
        
                    tabla += "</table>";
        
                    (<HTMLDivElement> document.getElementById("divTabla")).innerHTML = tabla;        
            
                }
            }   
        }

        public static AgregarPerroEnBaseDatos()
        {
            let xhr : XMLHttpRequest = new XMLHttpRequest();
  
            let tamaño : string = (<HTMLInputElement> document.getElementById("tamaño")).value;
            let edad : number = +(<HTMLInputElement> document.getElementById("edad")).value;
            let precio : number = +(<HTMLInputElement> document.getElementById("precio")).value;
            let nombre : string = (<HTMLInputElement> document.getElementById("nombre")).value;
            let raza : string = (<HTMLInputElement> document.getElementById("raza")).value;
            let fotoInput : any = <HTMLInputElement> document.getElementById("foto");
            let path: string = (<HTMLInputElement> document.getElementById("foto")).value;
            let pathFoto : string = (path.split('\\'))[2];
            let form : FormData = new FormData();

            let perroAux : Entidades.Perro;
            perroAux = new Entidades.Perro(tamaño, edad, precio, nombre, raza, pathFoto);

            let perroJSON = perroAux.ToJSON();

            form.append('caso', 'agregar_bd');
            form.append('cadenaJson', JSON.stringify(perroJSON));
            console.log(perroJSON);
            form.append('foto', fotoInput.files[0]);
            xhr.open('POST', './BACKEND/agregar_bd.php', true);
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

    public static VerificarExistencia()
    {
        let xhr : XMLHttpRequest = new XMLHttpRequest();
  
            let tamaño : string = (<HTMLInputElement> document.getElementById("tamaño")).value;
            let edad : number = +(<HTMLInputElement> document.getElementById("edad")).value;
            let precio : number = +(<HTMLInputElement> document.getElementById("precio")).value;
            let nombre : string = (<HTMLInputElement> document.getElementById("nombre")).value;
            let raza : string = (<HTMLInputElement> document.getElementById("raza")).value;
            let fotoInput : any = <HTMLInputElement> document.getElementById("foto");
            let path: string = (<HTMLInputElement> document.getElementById("foto")).value;
            let pathFoto : string = (path.split('\\'))[2];
            

            let perroAux : Entidades.Perro;
            perroAux = new Entidades.Perro(tamaño, edad, precio, nombre, raza, pathFoto);

            let perroJSON = perroAux.ToJSON();

            let perroExiste = "0";

            let form2 : FormData = new FormData();

            form2.append('caso', 'comparar');
            form2.append('cadenaJson', JSON.stringify(perroJSON));
            xhr.open('POST', './BACKEND/administrar.php', true);
            xhr.setRequestHeader("enctype", "multipart/form-data");
            xhr.send(form2);

            xhr.onreadystatechange = () => 
            {

                if (xhr.readyState == 4 && xhr.status == 200) 
                {

                    //console.log(xhr.responseText);

                    perroExiste = xhr.responseText;    
            
                }
            }   
    

            if(perroExiste == "1")
            {
                console.log("el perro ya existe no se puede agregar denuevo");
                alert("el perro ya existe no se puede agregar denuevo");
            }

            else
            {
                let form : FormData = new FormData();
                form.append('caso', 'agregar_bd');
                form.append('cadenaJson', JSON.stringify(perroJSON));
                console.log(perroJSON);
                form.append('foto', fotoInput.files[0]);
                xhr.open('POST', './BACKEND/agregar_bd.php', true);
                xhr.setRequestHeader("enctype", "multipart/form-data");
                xhr.send(form);

            xhr.onreadystatechange = () => 
            {

                if (xhr.readyState == 4 && xhr.status == 200) 
                {

                    console.log(xhr.responseText);
            
                    let retJSON = JSON.parse(xhr.responseText);
            
                    console.log(retJSON._foto);
            
                    (<HTMLImageElement> document.getElementById("imgFoto")).src = "./BACKEND/fotos/" + retJSON._pathFoto;    
                    //MostrarListado(); 
                }
            } 
            }

            
    }

    public static MostrarPerrosBaseDatos()
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

                    let tabla = xhr.responseText;

        
                    (<HTMLDivElement> document.getElementById("divTabla")).innerHTML = tabla;        
            
                }
            }   
    }


    }
    
}