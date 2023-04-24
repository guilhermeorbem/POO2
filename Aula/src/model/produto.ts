import { Fornecedor } from "./fornercedor"
export class Produto {
    private _id: number
    private _descricao: string
    protected _fornecedor: Fornecedor
    private _vlrUnitario: number

    constructor(id: number, descricao: string, fornecedor: Fornecedor,
        vlrUnitario: number) {
        this._id = id;
        this._descricao = descricao;
        this._fornecedor = fornecedor;
        this.vlrUnitario = vlrUnitario;
    }

    private validaValorUnitario(vlrUnitario: number): boolean {
        if (vlrUnitario <= 0) {
            console.log("Valor Unitário não pode ser menor ou igual a zero.")
            return false;
        }
        return true;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get descricao(): string {
        return this._descricao;
    }

    set descricao(descricao: string) {
        this._descricao = descricao;
    }

    get fornecedor(): Fornecedor {
        return this._fornecedor;
    }

    set fornecedor(fornecedor: Fornecedor) {
        this._fornecedor = fornecedor;
    }

    get vlrUnitario(): number {
        return this._vlrUnitario;
    }

    set vlrUnitario(vlrUnitario: number) {
        if (vlrUnitario <= 0) {
            console.log("Valor Unitário não pode ser menor ou igual a zero.")
            this._vlrUnitario = 30
        } else {
            this._vlrUnitario = vlrUnitario;
        }
    }
}
