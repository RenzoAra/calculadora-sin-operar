import {Operacion} from "../src/Operacion"

export class OperacionDivision extends Operacion{

    public implementar(a : number, b : number){
        return (a/b)
    }
}