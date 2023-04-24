"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estoque = void 0;
class Estoque {
    constructor(id, produto, quantidade) {
        this._id = id;
        this._produto = produto;
        this.quantidade = quantidade;
    }
    /*
      private validaSeForZero(valor: number): boolean {
          if (valor < 0) {
              console.log("Quantidade não pode ser menor que zero.")
              return false;
          }
          return true;
      }
      */
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get produto() {
        return this._produto;
    }
    set produto(produto) {
        this._produto = produto;
    }
    get quantidade() {
        return this._quantidade;
    }
    set quantidade(quantidade) {
        if (quantidade > 0) {
            this._quantidade = quantidade;
        }
        else {
            //  this._quantidade = 0;
            throw new Error('A quantidade não pode ser menor que zero');
        }
    }
    valorDoProdutoEmEstoque() {
        if (this.quantidade > 0) {
            console.log(`Valor do produto em estoque: ${this.produto.vlrUnitario}.`);
        }
        else {
            console.log("Produto não está em estoque.");
        }
    }
}
exports.Estoque = Estoque;
//# sourceMappingURL=estoque.js.map