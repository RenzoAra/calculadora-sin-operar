import Operacion from "./Operacion"

export class OperacionSuma extends Operacion{

    public implementar(a : number, b : number){
        let i = 0;
        let c = [];
        for (i=0;i<a;i++){
            c.push(1);
        }   
        for (i=0;i<b;i++){
            c.push(1);
        }   
        return (c.length);   
    }
}