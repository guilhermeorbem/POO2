export abstract class Pessoa {
        protected id: number;
        protected nome: string;
        protected nascimento: Date;

        constructor(id: number, nome: string, nascimento: Date) {
                this.id = id;
                this.nome = nome;
                this.nascimento = nascimento
        }

        protected abstract Desconto(valor: number): number

}