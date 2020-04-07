import { Context } from "./context"
import { Expresion } from "./Expresion";
import { OperacionSuma } from "./OperacionSuma";
import { OperacionResta } from "./OperacionResta";
import { OperacionDivision } from "./OperacionDivision";
import { OperacionMultiplicar } from "./OperacionMultiplicar";

export class ExpresionOperacion extends Expresion{

    public interpreter(contexto : Context){
            let accion
                let aux = contexto.input
                switch (aux){
                    case "sumar":
                        return new OperacionSuma()
                        break;
                    case "restar":
                        return new OperacionResta()
                        break;
                    case "dividir":
                        return new OperacionDivision()
                        break;
                    case "multiplicar":
                        return new OperacionMultiplicar()
                        break;
                    default:
                        break;
                }
        return accion
    }
}