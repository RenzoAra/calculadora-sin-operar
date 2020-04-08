import {Operacion} from "../src/Operacion"

export class OperacionSuma extends Operacion{

    public implementar(a : number, b : number){
        return (a+b)
    }
}