"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fornecedor = void 0;
class Fornecedor {
    constructor(id, nome_razaoSocial, cpfCnpj, telefone, endereco) {
        this._id = id;
        this._nome_razaoSocial = nome_razaoSocial;
        this._cpfCnpj = cpfCnpj;
        this._telefone = telefone;
        this._endereco = endereco;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get nome_razaoSocial() {
        return this._nome_razaoSocial;
    }
    set nome_razaoSocial(nome_razaoSocial) {
        this._nome_razaoSocial = nome_razaoSocial;
    }
    get cpfCnpj() {
        return this._cpfCnpj;
    }
    set cpfCnpj(cpfCnpj) {
        this._cpfCnpj = cpfCnpj;
    }
    get telefone() {
        return this._telefone;
    }
    set telefone(telefone) {
        this._telefone = telefone;
    }
    get endereco() {
        return this._endereco;
    }
    set endereco(endereco) {
        this._endereco = endereco;
    }
}
exports.Fornecedor = Fornecedor;
//# sourceMappingURL=fornercedor.js.map