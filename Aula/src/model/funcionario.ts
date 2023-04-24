import { Pessoa } from "./pessoa";
export class Funcionario extends Pessoa {
    private _salario: number;
    private _horasTrabalhadas: number;

    constructor(id: number, nome: string, nascimento: Date, salario: number, horasTrabalhadas: number) {
        super(id, nome, nascimento);
        this._salario = salario;
        this._horasTrabalhadas = horasTrabalhadas;
    }

    public pagamento(): string {
        return "50 pila"
    }

    public Desconto(valor: number): number {
        return (valor * 15) / 100;
    }

    get salario(): number {
        return this.salario;
    }

}