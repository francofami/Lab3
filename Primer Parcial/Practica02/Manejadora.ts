namespace RecuperatorioPrimerParcial
{
    class Manejadora
    {
        public static AgregarAlien()
        {
            let xhr : XMLHttpRequest = new XMLHttpRequest();
  
            let raza : string = (<HTMLInputElement> document.getElementById("raza")).value;
            let planetaOrigen : string = (<HTMLInputElement> document.getElementById("planetaOrigen")).value;
            let cuadrante : string = (<HTMLInputElement> document.getElementById("cuadrante")).value;
            let edad : number = +(<HTMLInputElement> document.getElementById("edad")).value;
            let altura : number = +(<HTMLInputElement> document.getElementById("altura")).value;
            let paisOrigen : string = (<HTMLInputElement> document.getElementById("paisOrigen")).value;
            let fotoInput : any = <HTMLInputElement> document.getElementById("foto");
            let path: string = (<HTMLInputElement> document.getElementById("foto")).value;
            let pathFoto : string = (path.split('\\'))[2];
            let form : FormData = new FormData();

            let objAlien : Entidades.Alien;
            objAlien = new Entidades.Alien(cuadrante, edad, altura, raza, planetaOrigen, pathFoto);

            let objAlienJSON = objAlien.ToJson();

            form.append('caso', 'agregar');
            form.append('cadenaJson', JSON.stringify(objAlienJSON));
            console.log(objAlienJSON);
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
    }
}