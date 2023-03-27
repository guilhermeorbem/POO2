export class Pessoa {
    private _nome: string;
    private _endereco: string;

    constructor(nome: string, endereco: string) {
        this._nome = nome;
        this._endereco = endereco
    }

    public imprimir(): void {
        console.log("Meu nome é", this.nome, "\n Meu endereço é: ", this.endereco)
    }


    set nome(nome: string) {
        this._nome = nome;
    }

    get nome() {
        return this._nome
    }

    set endereco(endereco: string) {
        this._endereco = endereco
    }

    get endereco() {
        return this._endereco;
    }



}

class PessoaFisica extends Pessoa {
    private _cpf: string

    constructor(nome: string, endereco: string, cpf: string) {
        super(nome, endereco)
        this._cpf = cpf
    }

    public imprimir(): void {
        console.log("Meu nome é", this.nome, "\n Meu endereço é: ", this.endereco, "\nMeu CPF é", this.cpf)
    }

    set cpf(cpf: string) {
        this._cpf = cpf
    }

    get cpf() {
        return this._cpf;
    }

}

class PessoaJuridica extends Pessoa {

    private _cnpj: string;

    constructor(nome: string, endereco: string, cnpj: string) {
        super(nome, endereco)
        this._cnpj = cnpj
    }

    public imprimir(): void {
        console.log("Meu nome é", this.nome, "\nMeu endereço é: ", this.endereco, "\nMeu CPF é", this.cnpj)
    }

    set cnpj(cnpj: string) {
        this._cnpj = cnpj
    }

    get cnpj() {
        return this._cnpj
    }
}

let pesssoa = new Pessoa("GuilhermeP", "Orleans")
pesssoa.imprimir();

let pesssoaFisica = new PessoaFisica("GuilhermePF", "Orleans","123.456.789-00")
pesssoaFisica.imprimir();

let pesssoaJuridica= new PessoaJuridica("GuilhermePJ", "Orleans","26.848.138/0001-39")
pesssoaJuridica.imprimir();