import Operacion from "./Operacion"

export class OperacionResta extends Operacion{

    public implementar(a : number, b : number){
        let i = 0;
        let c = [];
        if (b>a){
            for (i=0;i<b;i++){
                c.push(1);
            }   
            for (i=0;i<a;i++){
                c.pop();
            }   
            return (c.length*-1);
        }else{
            for (i=0;i<a;i++){
                c.push(1);
            }   
            for (i=0;i<b;i++){
                c.pop();
            }   
            return (c.length);  
    }
}
}
