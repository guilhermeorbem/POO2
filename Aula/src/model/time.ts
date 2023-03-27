export class Time {
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