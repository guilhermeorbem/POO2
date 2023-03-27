var Carro = /** @class */ (function () {
    function Carro() {
        this._marca = '';
        this._cor = '';
        this._potencia = 0;
        // set C
    }
    Object.defineProperty(Carro.prototype, "Marca", {
        get: function () {
            return this._marca;
        },
        set: function (marca) {
            this._marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    return Carro;
}());
var carro = new Carro();
carro.Marca = 'GM';
console.log(carro.Marca);
