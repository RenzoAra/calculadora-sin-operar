import { expect } from "chai";
import { Calc } from '../src/Calc';
import { Context } from "../src/Context";
import { ExpresionOperacion } from "../src/ExpresionOperacion";

describe("operaciones", function(){
      it("sumar",function(){
            let contexto = new Context("sumar");
            let operacion = new ExpresionOperacion().interpreter(contexto);
            let var1 = new Calc(10,100,operacion)
            let result = var1.operar();
            expect(result).equal(110);
      });
  });

describe("operaciones", function(){
    it("restar",function(){
            let contexto = new Context("restar");
            let operacion = new ExpresionOperacion().interpreter(contexto);
            let var1 = new Calc(10,100,operacion)
            let result = var1.operar();
            expect(result).equal(-90);
    });
});

describe("operaciones", function(){
      it("multiplicar",function(){
            let contexto = new Context("multiplicar");
            let operacion = new ExpresionOperacion().interpreter(contexto);
            let var1 = new Calc(10,100,operacion)
            let result = var1.operar();
            expect(result).equal(1000);
      });
  });

describe("operaciones", function(){
    it("dividir",function(){
      let contexto = new Context("dividir");
      let operacion = new ExpresionOperacion().interpreter(contexto);
      let var1 = new Calc(46,10,operacion)
      let result = var1.operar();
      expect(result).equal(4.6);
    });
});