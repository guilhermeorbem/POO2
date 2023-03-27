"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
class Time {
    constructor(vitorias, derrotas, qtd_jogadores, tecnico, nome) {
        this._vitorias = vitorias;
        this._derrotas = derrotas;
        this.qtd_jogadores = qtd_jogadores;
        this.tecnico = tecnico;
        this.nome = nome;
    }
    get vitorias() {
        return this._vitorias;
    }
    set vitorias(vitorias) {
        this._vitorias = vitorias;
    }
    get derrotas() {
        return this._derrotas;
    }
    set derrotas(derrotas) {
        this._derrotas = derrotas;
    }
}
exports.Time = Time;
//# sourceMappingURL=time.js.map