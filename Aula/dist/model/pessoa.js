"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, endereco) {
        this._nome = nome;
        this._endereco = endereco;
    }
    imprimir() {
        console.log("Meu nome é", this.nome, "\n Meu endereço é: ", this.endereco);
    }
    set nome(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    set endereco(endereco) {
        this._endereco = endereco;
    }
    get endereco() {
        return this._endereco;
    }
}
exports.Pessoa = Pessoa;
class PessoaFisica extends Pessoa {
    constructor(nome, endereco, cpf) {
        super(nome, endereco);
        this._cpf = cpf;
    }
    imprimir() {
        console.log("Meu nome é", this.nome, "\n Meu endereço é: ", this.endereco, "\nMeu CPF é", this.cpf);
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
}
class PessoaJuridica extends Pessoa {
    constructor(nome, endereco, cnpj) {
        super(nome, endereco);
        this._cnpj = cnpj;
    }
    imprimir() {
        console.log("Meu nome é", this.nome, "\n Meu endereço é: ", this.endereco, "\nMeu CPF é", this.cnpj);
    }
    set cnpj(cnpj) {
        this._cnpj = cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
}
let pesssoa = new Pessoa("GuilhermeP", "Orleans");
pesssoa.imprimir();
let pesssoaFisica = new PessoaFisica("GuilhermePF", "Orleans", "123.456.789-00");
pesssoaFisica.imprimir();
let pesssoaJuridica = new PessoaJuridica("GuilhermePJ", "Orleans", "26.848.138/0001-39");
pesssoaJuridica.imprimir();
//# sourceMappingURL=pessoa.js.map