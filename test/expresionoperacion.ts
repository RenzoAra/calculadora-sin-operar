import { expect } from "chai";
import { Context } from "../src/Context";
import { ExpresionOperacion } from "../src/ExpresionOperacion";
import { OperacionSuma } from "../src/OperacionSuma";
import { OperacionResta } from "../src/OperacionResta";
import { OperacionDivision } from "../src/OperacionDivision"
import { OperacionMultiplicar } from "../src/OperacionMultiplicar"


describe("interpreteroperacion", function(){
    it("devolver sumar",function(){
        let var1  = new Context("sumar");
        let var2 = new ExpresionOperacion().interpreter(var1);
        expect(var2 instanceof OperacionSuma).equal(true);
    });
});

describe("interpreteroperacion", function(){
    it("devolver restar",function(){
        let var1  = new Context("restar");
        let var2 = new ExpresionOperacion().interpreter(var1);
        expect(var2 instanceof OperacionResta).equal(true);
    });
});

describe("interpreteroperacion", function(){
    it("devolver dividir",function(){
        let var1  = new Context("dividir");
        let var2 = new ExpresionOperacion().interpreter(var1);
        expect(var2 instanceof OperacionDivision).equal(true);
    });
});

describe("interpreteroperacion", function(){
    it("devolver multiplicar",function(){
        let var1  = new Context("multiplicar");
        let var2 = new ExpresionOperacion().interpreter(var1);
        expect(var2 instanceof OperacionMultiplicar).equal(true);
    });
});