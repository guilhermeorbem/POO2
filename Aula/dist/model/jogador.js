"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogador = void 0;
const time_1 = require("./time");
class Jogador extends time_1.Time {
    constructor(nr_camisa, nome) {
        super(0, 0, 24, "Felipão", "Parmera");
        this._nr_camisa = 0;
        this._nome = '';
        this._nr_camisa = nr_camisa;
        this._nome = nome;
    }
}
exports.Jogador = Jogador;
//# sourceMappingURL=jogador.js.map