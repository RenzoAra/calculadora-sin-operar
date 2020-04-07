import { Context } from "../src/Context"
import { Expresion } from "../src/Expresion";

export class ExpresionNumero extends Expresion{

    public interpreter(contexto : Context){
            let pal = ""
            for (let i = 0; i < contexto.input2.length; i++) {
                let aux = contexto.input2.substring(i,i+3)
                switch (aux){
                    case "cer":
                        pal = pal.concat("0")
                        break;
                    case "uno":
                        pal = pal.concat("1")
                        break;
                    case "dos":
                        pal = pal.concat("2")
                        break;
                    case "tre":
                        pal = pal.concat("3")
                        break;
                    case "cua":
                        pal = pal.concat("4")
                        break;
                    case "cin":
                        pal = pal.concat("5")
                        break;
                    case "sei":
                        pal = pal.concat("6")
                        break;
                    case "sie":
                        pal = pal.concat("7")
                        break;
                    case "och":
                        pal = pal.concat("8")
                        break;
                    case "nue":
                        pal = pal.concat("9")
                        break;
                    default:
                        break;
                }
        }
        return parseInt(pal)
    }
}