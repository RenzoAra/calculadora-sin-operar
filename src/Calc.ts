import Operacion from "./Operacion"

export class Calc {
    numero1 = null;
    numero2 = null;
    operacion = null;
    resultado = null;

    constructor(a:number, b:number,c:Operacion){
        this.numero1 = a;
        this.numero2 = b;
        this.operacion = c;
    }

    public operar (){
        this.resultado = this.operacion.implementar(this.numero1,this.numero2)
        return this.resultado
    }
}
