class Carro {
    private _marca: string = ''
    private _cor: string = ''
    private _potencia: number = 0

    set Marca(marca:string){
        this._marca = marca
    }

    get Marca(){
        return this._marca
    }

   set Potencia(potencia : number){
        if(potencia > 0){
            this._potencia = potencia
        }
   }

   get Potencia(){
        return this._potencia
   }
} 

let carro = new Carro()
carro.Marca = 'marca'
console.log(carro.Marca)
carro.Potencia = - 150
/*
if(potencia > 0){
   carro.potencia
*/
console.log(carro)
