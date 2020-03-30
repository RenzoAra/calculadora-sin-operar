export class Calc {
    static sumar(a: number, b: number) : number {
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
    static restar (a:number, b:number) : number{
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
    static multiplicar(a:number, b:number): number{
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
    static dividir(a:number, b:number): number{
        let i = 0;
        let c = [];
        while (a>=b){
            a = Calc.restar(a,b);
            c.push(1);
        }
        return (c.length);
    }
}

export default Calc;