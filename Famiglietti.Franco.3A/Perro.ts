/// <reference path="./Mascota.ts" />

namespace Entidades
{
    export class Perro extends Mascota
    {
        protected _nombre : string;
        protected _raza : string;
        protected _pathFoto : string;

        public constructor(tamaño : string, edad : number, precio:number, nombre: string, raza : string, pathFoto : string)
        {
            super(tamaño, edad, precio);
            this._nombre = nombre;
            this._raza = raza;
            this._pathFoto = pathFoto;
        }

        public ToJSON() : any
        {
            let retorno : JSON;
            let string : string;

            string = this.ToString();

            string +='"_nombre":"'+this._nombre+'","_raza":"'+this._raza+'","_pathFoto":"'+this._pathFoto+'"}';

            retorno = JSON.parse(string);

            return retorno;
        }
    }
}