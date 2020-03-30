export class AccionReceptor {
  public status = "";
  constructor(){
  }
  public actionFinNumero(){
    let aux = this.status;
    this.status = "";
    return aux;
}
  public actionNumero(n : string){
      this.status = this.status.concat(n);
      return this.status;
  }
}