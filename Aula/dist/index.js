"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gerente_1 = require("./model/gerente");
const funcionario_1 = require("./model/funcionario");
const cliente_1 = require("./model/cliente");
const gerente = new gerente_1.Gerente(1, "João", new Date('01/01/1950'), 5000, 'A3');
console.log(gerente);
//console.log(gerente.Desconto(5000));
const funcionario = new funcionario_1.Funcionario(1, "João", new Date('01/01/1950'), 2000, 48);
console.log(funcionario);
//console.log(funcionario.Desconto(funcionario.salario));
const cliente = new cliente_1.Cliente(1, "João", new Date('01/01/1950'), '5');
console.log(cliente);
console.log(cliente.Desconto(10000));
//# sourceMappingURL=index.js.map