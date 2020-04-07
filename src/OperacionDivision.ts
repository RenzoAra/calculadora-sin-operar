import Operacion from "../src/Operacion"
import {OperacionResta} from "../src/OperacionResta"

export class OperacionDivision extends Operacion{

    public implementar(a : number, b : number){
        let i = 0;
        let c = [];
        while (a>=b){
            a = new OperacionResta().implementar(a,b);
            c.push(1);
        }
        return (c.length);  
    }
}