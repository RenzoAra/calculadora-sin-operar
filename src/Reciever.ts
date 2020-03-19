export class accionReceptor {
  
  public status = "";
  
  constructor(){
  }
    public actionNumero(n : string){
        status = status.concat(n);
        return status;
    }
}