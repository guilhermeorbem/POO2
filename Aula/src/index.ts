import { Gerente } from "./model/gerente"
import { Funcionario } from "./model/funcionario";
import { Cliente } from "./model/cliente";

const gerente = new Gerente(1, "João", new Date('01/01/1950'), 5000, 'A3')
console.log(gerente);
//console.log(gerente.Desconto(5000));

const funcionario = new Funcionario(1, "João", new Date('01/01/1950'), 2000, 48);
console.log(funcionario)
//console.log(funcionario.Desconto(funcionario.salario));

const cliente = new Cliente(1, "João", new Date('01/01/1950'), '5')
console.log(cliente);
console.log(cliente.Desconto(10000));

