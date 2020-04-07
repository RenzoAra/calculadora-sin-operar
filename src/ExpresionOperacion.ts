import { Context } from "../src/Context"
import { Expresion } from "../src/Expresion";
import { OperacionSuma } from "../src/OperacionSuma";
import { OperacionResta } from "../src/OperacionResta";
import { OperacionDivision } from "../src/OperacionDivision";
import { OperacionMultiplicar } from "../src/OperacionMultiplicar";

export class ExpresionOperacion extends Expresion{

    public interpreter(contexto : Context){
                let aux = contexto.input
                switch (aux){
                    case "sumar":
                        return new OperacionSuma()
                    case "restar":
                        return new OperacionResta()
                    case "dividir":
                        return new OperacionDivision()
                    case "multiplicar":
                        return new OperacionMultiplicar()
                }
    }
}