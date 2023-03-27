import { Time } from "./time"

export class Jogador extends Time {

    private _nr_camisa: number = 0
    private _nome: string = ''

    constructor(nr_camisa: number, nome: string) {
        super(0, 0, 24, "Felipão", "Parmera")

        this._nr_camisa = nr_camisa
        this._nome = nome
    }
    
}