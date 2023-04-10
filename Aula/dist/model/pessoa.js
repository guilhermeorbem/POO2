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
    constructor(nome, endereco, cpf, rg) {
        super(nome, endereco);
        this._cpf = this.validarCPF(cpf) ? cpf : "CPF Inválido";
        this._rg = rg;
    }
    imprimir() {
        console.log("Meu nome é", this.nome, "\n Meu endereço é: ", this.endereco, "\nMeu CPF é", this.cpf);
    }
    set cpf(cpf) {
        if (this.validarCPF(cpf)) {
            this._cpf = cpf;
        }
        else {
            "Alguma coisa ";
        }
    }
    get cpf() {
        return this._cpf;
    }
    set rg(rg) {
        this._rg = rg;
    }
    validarCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf == '')
            return false;
        // Elimina CPFs invalidos conhecidos	
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return false;
        // Valida 1o digito	
        let add = 0;
        for (let i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
        let rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
            return false;
        // Valida 2o digito	
        add = 0;
        for (let i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(10)))
            return false;
        return true;
    }
}
class PessoaJuridica extends Pessoa {
    constructor(nome, endereco, cnpj) {
        super(nome, endereco);
        this._cnpj = cnpj;
    }
    imprimir() {
        console.log("Meu nome é", this.nome, "\nMeu endereço é: ", this.endereco, "\nMeu CPF é", this.cnpj);
    }
    set cnpj(cnpj) {
        this._cnpj = cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
}
/*
let pesssoa = new Pessoa("GuilhermeP", "Orleans")
pesssoa.imprimir();
*/
let pesssoaFisica = new PessoaFisica("GuilhermePF", "Orleans", "123.456.789-00", "5024351");
pesssoaFisica.rg = "5025333";
pesssoaFisica.imprimir();
pesssoaFisica.cpf = "54148090979";
pesssoaFisica.imprimir();
/*
let pesssoaJuridica= new PessoaJuridica("GuilhermePJ", "Orleans","26.848.138/0001-39")
pesssoaJuridica.imprimir();
*/ 
//# sourceMappingURL=pessoa.js.map