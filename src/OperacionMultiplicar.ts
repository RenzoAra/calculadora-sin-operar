import Operacion from "../src/Operacion"

export class OperacionMultiplicar extends Operacion{

    public implementar(a : number, b : number){
        let i = 0;
        let j = 0;
        let c = [];
        for (i=0;i<a;i++){
            for (j=0;j<b;j++){
                c.push(1);
            }  
        }   
        return (c.length); 
    }
}