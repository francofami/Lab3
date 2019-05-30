/// <reference path="./Ente.ts" />

namespace Entidades
{
    export class Alien extends Ente
    {
        protected raza : String;
        protected planetaOrigen : String;
        protected pathFoto : String;

        public constructor(cuadrante : String, edad : Number, altura : Number, raza : String, planetaOrigen : String, pathFoto : String)
        {
            super(cuadrante, edad, altura);
            this.raza = raza;
            this.planetaOrigen = planetaOrigen;
            this.pathFoto = pathFoto;
        }

        public ToJson() : any 
        {
            let auxToString = '{'+this.ToString() + ',"raza":"'+ this.raza +'","planetaOrigen":"'+this.planetaOrigen+'","pathFoto": "'+this.pathFoto+'"}';
            return JSON.parse(auxToString);
        }
    }
}