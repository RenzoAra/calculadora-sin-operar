import {Operacion} from "../src/Operacion"

export class OperacionMultiplicar extends Operacion{

    public implementar(a : number, b : number){
        return (a*b)
    }
}