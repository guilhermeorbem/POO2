class Time {
    private _vitorias: number
    protected _derrotas: number
    qtd_jogadores: number
    tecnico: string
    nome: string

    constructor(vitorias: number, derrotas: number,
        qtd_jogadores: number, tecnico: string,
        nome: string) {

        this._vitorias = vitorias
        this._derrotas = derrotas
        this.qtd_jogadores = qtd_jogadores
        this.tecnico = tecnico
        this.nome = nome
    }

    get vitorias(): number {
        return this._vitorias;
    }

    set vitorias(vitorias: number) {
        this._vitorias = vitorias
    }

    get derrotas(): number {
        return this._derrotas
    }

}

let time = new Time(0, 0, 24, "Felipão", "Parmera")

console.log("Numero de Vitórias " + time.vitorias)
time.vitorias = 10;

console.log("Derrotas " , time.derrotas)
console.log("Quantidade de Jogadores ",time.qtd_jogadores)
console.log("Técnico ",time.tecnico)
console.log("Nome ",time.nome)
console.log("Numero de Vitórias " + time.vitorias)