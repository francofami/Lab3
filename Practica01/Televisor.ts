/// <reference path="./Producto.ts" />


namespace Entidades
{
    export class Televisor extends Producto
    {
        protected _tipo :string;
        protected _paisOrigen:string;
        protected _pathFoto:string;

        public constructor(codigo: number, marca :string, precio:number, tipo:string, paisOrigen:string, pathFoto:string)
        {
            super(codigo, marca, precio);
            this._tipo = tipo;
            this._paisOrigen = paisOrigen;
            this._pathFoto = pathFoto;
        }

        public ToJSON() : any
        {
            let retorno : JSON;
            let string : string;

            string = this.ToString();

            string +='"_tipo":"'+this._tipo+'","_paisOrigen":"'+this._paisOrigen+'","_pathFoto":"'+this._pathFoto+'"}';

            retorno = JSON.parse(string);

            return retorno;
        }
    }
}