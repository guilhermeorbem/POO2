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

    set derrotas(derrotas: number) {
        this._derrotas = derrotas
    }

}

class Jogador extends Time {

    private _nr_camisa: number = 0
    private _nome: string = ''

    constructor(nr_camisa: number, nome: string) {
        super(0, 0, 24, "Felipão", "Parmera")

        this._nr_camisa = nr_camisa
        this._nome = nome
    }
    
}

let jogador = new Jogador(10, "Paquetá");

console.log(jogador)


/*
let time = new Time(0, 0, 24, "Felipão", "Parmera")

console.log("Numero de Vitórias " + time.vitorias)
time.vitorias = 10;

console.log("Derrotas " , time.derrotas)
console.log("Quantidade de Jogadores ",time.qtd_jogadores)
console.log("Técnico ",time.tecnico)
console.log("Nome ",time.nome)
console.log("Numero de Vitórias " + time.vitorias)

*/
