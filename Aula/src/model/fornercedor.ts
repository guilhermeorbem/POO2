export class Fornecedor {
    private _id: number
    private _nome_razaoSocial: string
    private _cpfCnpj: string
    private _telefone: string
    private _endereco: string

    constructor(id: number, nome_razaoSocial: string, cpfCnpj: string,
        telefone: string, endereco: string) {
        this._id = id;
        this._nome_razaoSocial = nome_razaoSocial;
        this._cpfCnpj = cpfCnpj;
        this._telefone = telefone;
        this._endereco = endereco;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get nome_razaoSocial(): string {
        return this._nome_razaoSocial;
    }

    set nome_razaoSocial(nome_razaoSocial: string) {
        this._nome_razaoSocial = nome_razaoSocial;
    }

    get cpfCnpj(): string {
        return this._cpfCnpj;
    }

    set cpfCnpj(cpfCnpj: string) {
        this._cpfCnpj = cpfCnpj;
    }

    get telefone(): string {
        return this._telefone;
    }

    set telefone(telefone: string) {
        this._telefone = telefone;
    }

    get endereco(): string {
        return this._endereco;
    }

    set endereco(endereco: string) {
        this._endereco = endereco;
    }
}
