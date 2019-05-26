namespace Entidades
{
    export class Producto
    {
        protected _codigo : number;
        protected _marca : string;
        protected _precio : number;

        public constructor(codigo: number, marca :string, precio:number)
        {
            this._codigo = codigo;
            this._marca = marca;
            this._precio = precio;
        }

        public ToString() : string
        {
            let retorno : string;

            retorno = '{"_codigo":'+this._codigo.toString()+',"_marca":"'+this._marca+'","_precio":'+this._precio.toString()+',';

            return retorno;
        }
    }
    
}