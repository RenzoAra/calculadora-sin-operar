import { Expresion } from "../src/Expresion"
import { expect, assert } from "chai";
import { Context } from "../src/Context";
import { ExpresionNumero } from "../src/ExpresionNumero";


describe("interpreter", function(){
    it("devolver 4",function(){
        let var1  = new Context("cuatro");
        var1.reemplazarCadena();
        let var2 = new ExpresionNumero().interpreter(var1);
        expect(var2).equal(4);
    });
});

describe("interpreter", function(){
    it("devolver 44",function(){
        let var1  = new Context("cuatrocuatro");
        var1.reemplazarCadena();
        let var2 = new ExpresionNumero().interpreter(var1);
        expect(var2).equal(44);
    });
});

describe("interpreter", function(){
    it("devolver 100",function(){
        let var1  = new Context("unocerocero");
        var1.reemplazarCadena();
        let var2 = new ExpresionNumero().interpreter(var1);
        expect(var2).equal(100);
    });
});

describe("interpreter", function(){
    it("devolver 101",function(){
        let var1  = new Context(" uno cero uno ");
        var1.reemplazarCadena();
        let var2 = new ExpresionNumero().interpreter(var1);
        expect(var2).equal(101);
    });
});


describe("interpreter", function(){
    it("devolver 24 unos",function(){
        let var1  = new Context("unounounounounounounounounounounounounounounounounounounounounounounouno");
        var1.reemplazarCadena();
        let var2 = new ExpresionNumero().interpreter(var1);
        expect(var2).equal(111111111111111111111111);
    });
});

describe("interpreter", function(){
    it("devolver 30 unos",function(){
        let var1  = new Context("unounounounounounounounounounounounounounounounounounounounounounounounounounounounounouno");
        var1.reemplazarCadena();
        let var2 = new ExpresionNumero().interpreter(var1);
        expect(var2).equal(111111111111111111111111111111);
    });
});

describe("interpreter", function(){
    it("devolver 50 unos",function(){
        let var1  = new Context("unounounounounounounounounounounounounounounounounounounounounounounounounounounounounounounounounounounounounounounounounounounounounounounounounouno");
        var1.reemplazarCadena();
        let var2 = new ExpresionNumero().interpreter(var1);
        expect(var2).equal(11111111111111111111111111111111111111111111111111);
    });
});