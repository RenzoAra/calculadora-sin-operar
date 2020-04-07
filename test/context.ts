import { expect } from "chai";
import { Context } from "../src/Context";


describe("context", function(){
    it("devolver 4",function(){
        let var1  = new Context("cuatro");
        expect(var1.reemplazarCadena()).equal("cua");
    });
});
describe("context", function(){
    it("123",function(){
        let var1  = new Context("unodostres");
        expect(var1.reemplazarCadena()).equal("unodostre");
    });
});

describe("context", function(){
    it("1 2 3",function(){
        let var1  = new Context("uno dos tres");
        expect(var1.reemplazarCadena()).equal("unodostre");
    });
});

describe("context", function(){
    it("579866",function(){
        let var1  = new Context(" cincosiete  nueve ocho seisseis");
        expect(var1.reemplazarCadena()).equal("cinsienueochseisei");
    });
});
