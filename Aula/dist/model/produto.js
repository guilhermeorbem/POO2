"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(id, descricao, fornecedor, vlrUnitario) {
        this._id = id;
        this._descricao = descricao;
        this._fornecedor = fornecedor;
        this.vlrUnitario = vlrUnitario;
    }
    validaValorUnitario(vlrUnitario) {
        if (vlrUnitario <= 0) {
            console.log("Valor Unitário não pode ser menor ou igual a zero.");
            return false;
        }
        return true;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get descricao() {
        return this._descricao;
    }
    set descricao(descricao) {
        this._descricao = descricao;
    }
    get fornecedor() {
        return this._fornecedor;
    }
    set fornecedor(fornecedor) {
        this._fornecedor = fornecedor;
    }
    get vlrUnitario() {
        return this._vlrUnitario;
    }
    set vlrUnitario(vlrUnitario) {
        if (vlrUnitario <= 0) {
            console.log("Valor Unitário não pode ser menor ou igual a zero.");
            this._vlrUnitario = 30;
        }
        else {
            this._vlrUnitario = vlrUnitario;
        }
    }
}
exports.Produto = Produto;
//# sourceMappingURL=produto.js.map