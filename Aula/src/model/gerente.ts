import { Pessoa } from "./pessoa";

export class Gerente extends Pessoa {
    private salario: number;
    private sala: string;

    constructor(id: number, nome: string, nascimento: Date, salario: number, sala: string) {
        super(id, nome, nascimento);
        this.salario = salario;
        this.sala = sala;
    }

    public exibirSala(): string {
        return this.sala;
    }

    public Desconto(valor: number): number {

        return 5;

    }

}