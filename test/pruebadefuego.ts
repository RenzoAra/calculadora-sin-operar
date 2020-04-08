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