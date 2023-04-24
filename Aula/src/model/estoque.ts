import { Produto } from "./produto";
export class Estoque {
    private _id: number
    private _produto: Produto
    private _quantidade?: number
    

    constructor(id: number, produto: Produto, quantidade: number) {
        this._id = id;
        this._produto = produto;
        this.quantidade = quantidade ;
        
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

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get produto(): Produto {
        return this._produto;
    }

    set produto(produto: Produto) {
        this._produto = produto;
    }

    get quantidade(): number{
        return this._quantidade;
    }

    set quantidade(quantidade: number) {
        if (quantidade > 0) {
            this._quantidade = quantidade;
        } else {        
            throw new Error('A quantidade não pode ser menor que zero');
        }
        
    }
    valorDoProdutoEmEstoque(): void {
        if (this.quantidade > 0) {
            console.log(`Valor do produto em estoque: ${this.produto.vlrUnitario}.`);
        } else {
            console.log("Produto não está em estoque.");
        }
    }
}
