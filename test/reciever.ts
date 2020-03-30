import { expect } from "chai";
import { AccionReceptor } from '../src';

describe('devolver 2', function() {
      it('devolver 2', function() {
        const c = new AccionReceptor();
        expect(c.actionNumero("2")).equal("2");
      });
});

describe('devolver 12', function() {
      it('devolver 12', function() {
        const c = new AccionReceptor();
        c.actionNumero("1");
        expect(c.actionNumero("2")).equal("12");
      });
    });
  
    describe('devolver 123', function() {
      it('devolver 123', function() {
        const c = new AccionReceptor();
        c.actionNumero("1");
        c.actionNumero("2");
        c.actionNumero("3");
        expect(c.actionFinNumero()).equal("123");
      });
    });
  
    describe('devolver 100000...(23 ceros)', function() {
      it('devolver 100000...(23 ceros)', function() {
        const c = new AccionReceptor();
        c.actionNumero("1");
        for(let i = 0; i<22; i++){
          c.actionNumero("0");
        }
        expect(c.actionFinNumero()).equal("10000000000000000000000");
      });
    });