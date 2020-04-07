import { Context } from "./context"
import { Expresion } from "./Expresion";
import { OperacionSuma } from "./OperacionSuma";
import { OperacionResta } from "./OperacionResta";
import { OperacionDivision } from "./OperacionDivision";
import { OperacionMultiplicar } from "./OperacionMultiplicar";

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