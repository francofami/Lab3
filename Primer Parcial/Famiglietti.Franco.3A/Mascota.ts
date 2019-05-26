namespace Entidades
{
    export class Mascota
    {
        protected _tamaño : string;
        protected _edad : number;
        protected _precio : number;

        public constructor(tamaño: string, edad :number, precio:number)
        {
            this._tamaño = tamaño;
            this._edad = edad;
            this._precio = precio;
        }

        public ToString() : string
        {
            let retorno : string;

            retorno = '{"_tamaño":"'+this._tamaño+'","_edad":'+this._edad.toString()+',"_precio":'+this._precio.toString()+',';

            return retorno;
        }
    }
    
}