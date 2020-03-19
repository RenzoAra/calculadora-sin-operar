import { expect } from "chai";
import { accionReceptor } from '../src';

describe("si recibe '2' debe devolver '2'", function(){
      it("actionNumero",function(){
            const c = new accionReceptor();
            expect(c.actionNumero("2")).equal("2");
      });
  });