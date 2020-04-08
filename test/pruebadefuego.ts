import { expect } from "chai";
import { Context } from "../src/Context";
import { Calc } from '../src/Calc';
import { ExpresionNumero } from "../src/ExpresionNumero";
import { ExpresionOperacion } from "../src/ExpresionOperacion";


describe("calculadora", function(){
    it("devolver 3",function(){
        let one  = new Context("uno");
        one.reemplazarCadena();
        let two = new Context ("dos");
        two.reemplazarCadena();
        let three = new Context ("sumar");

        let var1 = new ExpresionNumero().interpreter(one);
        let var2 = new ExpresionNumero().interpreter(two);
        let operacion = new ExpresionOperacion().interpreter(three);

        let result = operacion.implementar(var1,var2)

        expect(result).equal(3);
    });
});

describe("calculadora", function(){
    it("devolver 200",function(){
        let one  = new Context("unocerocero");
        one.reemplazarCadena();
        let two = new Context ("unocerocero");
        two.reemplazarCadena();
        let three = new Context("sumar");

        let result = new Calc(new ExpresionNumero().interpreter(one),new ExpresionNumero().interpreter(two),new ExpresionOperacion().interpreter(three))

        expect(result.operar()).equal(200);
    });
})

describe("calculadora", function(){
    it("devolver 100000000000000000000000",function(){
        let one  = new Context("nuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenueve");
        one.reemplazarCadena();
        let two = new Context ("uno");
        two.reemplazarCadena();
        let three = new Context("sumar");

        let var1 = new ExpresionNumero().interpreter(one);
        let var2 = new ExpresionNumero().interpreter(two);
        let operacion = new ExpresionOperacion().interpreter(three);

        let result = new Calc(var1,var2,operacion);

        expect(result.operar()).equal(100000000000000000000000);
    });
})

describe("calculadora", function(){
    it("devolver 1 x 100 ceros",function(){

        let aux = "";
        
        for (let i=0;i<100;i++){
            aux = aux.concat("nueve")
        }

        let one  = new Context(aux);
        one.reemplazarCadena();

        let three = new Context("sumar");

        let two = new Context ("uno");
        two.reemplazarCadena();
        

        let var1 = new ExpresionNumero().interpreter(one);
        let var2 = new ExpresionNumero().interpreter(two);
        let operacion = new ExpresionOperacion().interpreter(three);

        let result = new Calc(var1,var2,operacion);

        let aux2 = "1";
        for (let j=0;j<100;j++){
            aux2 = aux2.concat("0")
        }

        expect(result.operar()).equal(parseInt(aux2));
    });
})

describe("calculadora", function(){
    it("devolver 1 x 1000 ceros",function(){

        let aux = "";
        
        for (let i=0;i<1000;i++){
            aux = aux.concat("nueve")
        }

        let one  = new Context(aux);
        one.reemplazarCadena();

        let three = new Context("sumar");

        let two = new Context ("uno");
        two.reemplazarCadena();
        

        let var1 = new ExpresionNumero().interpreter(one);
        let var2 = new ExpresionNumero().interpreter(two);
        let operacion = new ExpresionOperacion().interpreter(three);

        let result = new Calc(var1,var2,operacion);

        let aux2 = "1";
        for (let j=0;j<1000;j++){
            aux2 = aux2.concat("0")
        }

        expect(result.operar()).equal(parseInt(aux2));
    });
})

