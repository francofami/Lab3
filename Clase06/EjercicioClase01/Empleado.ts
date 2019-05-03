/// <reference path="./Persona.ts" />

namespace Ejercicio03
{
    export class Empleado extends Persona
{
    protected _legajo : number;
    protected _sueldo : number;
    protected _foto : any;

    public constructor(nombre:string, apellido:string, dni:number, sexo:string, legajo:number, sueldo:number,foto:any)
    {
        super(nombre,apellido,dni,sexo);
        this._legajo = legajo;
        this._sueldo = sueldo;
        this._foto = foto;
    }

    public GetLegajo() : number
    {
        return this._legajo;
    }

    public GetSueldo(): number
    {
        return this._sueldo;
    }

    public Hablar(idioma:string) : string
    {
        return "El empleado habla "+idioma;
    }

    public ToString() : string
    {
        return super.ToString()+" - "+this._legajo+" - "+this._sueldo;
    }
}
}