export class Context {
    ouput = 0
    input = ""
    input2 = ""
    constructor(numero : string){
        this.input = numero
    }
    public reemplazarCadena() {
        
        for (let i = 0; i < this.input.length; i++) {
            let aux = this.input.substring(i,i+3)
            if ((aux == "cer") || (aux == "uno") || (aux == "dos") || (aux == "tre") || (aux == "cua") || (aux == "cin") || (aux == "sei") || (aux == "sie") || (aux == "och") || (aux == "nue")){
                this.input2 = this.input2.concat(aux);
             }
        }
        return this.input2
 }
}