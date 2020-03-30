import { expect } from "chai";
import { Calc } from '../src/Calc';

describe("esto debe sumar cualquier numero", function(){
      it("sumar",function(){
            let result = Calc.sumar(10,100);
            expect(result).equal(110);
      });
  });

describe("esto debe restar cualquier numero", function(){
    it("restar",function(){
          let result = Calc.restar(10,100);
          expect(result).equal(-90);
    });
});

describe("esto debe multiplicar cualquier numero", function(){
      it("multiplicar",function(){
            let result = Calc.multiplicar(10,100);
            expect(result).equal(1000);
      });
  });

describe("esto debe dividir cualquier numero", function(){
    it("dividir",function(){
          let result = Calc.dividir(46,10);
          expect(result).equal(4);
    });
});