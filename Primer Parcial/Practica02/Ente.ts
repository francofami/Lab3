namespace Entidades
{
    export class Ente
    {
        protected cuadrante : String;
        protected edad : Number;
        protected altura : Number;

        public constructor(cuadrante : String, edad : Number, altura : Number)
        {
            this.cuadrante = cuadrante;
            this.edad = edad;
            this.altura = altura;
        }

        public ToString()
        {
            return '"cuadrante":"'+this.cuadrante+'","edad": '+this.edad+',"altura":'+this.altura;
        }
    }
}