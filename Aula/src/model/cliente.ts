import { Pessoa } from "./pessoa"

export class Cliente extends Pessoa {
    private nivel: string

    constructor(id: number, nome: string, nascimento: Date, nivel: string) {
        super(id, nome, nascimento);
        this.nivel = nivel;

    }

    public ExibirNivel(): string {
        return this.nivel
    }
    public Desconto(valor: number): number {

        return 10;

    }

}