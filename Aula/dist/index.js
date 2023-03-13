"use strict";
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
}
let time = new Time(0, 0, 24, "Felipão", "Parmera");
console.log("Numero de Vitórias " + time.vitorias);
time.vitorias = 10;
console.log("Derrotas ", time.derrotas);
console.log("Quantidade de Jogadores ", time.qtd_jogadores);
console.log("Técnico ", time.tecnico);
console.log("Nome ", time.nome);
console.log("Numero de Vitórias " + time.vitorias);
//# sourceMappingURL=index.js.map