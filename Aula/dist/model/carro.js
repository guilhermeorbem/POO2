"use strict";
class Carro {
    constructor() {
        this._marca = '';
        this._cor = '';
        this.potencia = 0;
        //set C
    }
    set Marca(marca) {
        this._marca = marca;
    }
    get Marca() {
        return this._marca;
    }
}
let carro = new Carro();
carro.Marca = 'marca';
console.log(carro.Marca);
carro.potencia = -150;
console.log(carro);
//# sourceMappingURL=carro.js.map