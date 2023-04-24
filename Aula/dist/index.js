"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fornercedor_1 = require("./model/fornercedor");
const produto_1 = require("./model/produto");
const estoque_1 = require("./model/estoque");
//npm install prompt-sync
//const prompt = require('prompt-sync')({sigint: true});
var fornecedor = new fornercedor_1.Fornecedor(1, "DELL COMPUTADORES DO BRASIL LTDA", "72.381.189/0001-10", "(51) 3274-5500", "92.990-000, ELDORADO DO SUL - RS, AV INDUSTRIAL BELGRAF, n° 400");
console.log("Fornecedor: " + fornecedor.id + ", Nome/Razão Social: " + fornecedor.nome_razaoSocial
    + ", CPF/CNPJ: " + fornecedor.cpfCnpj + ", Telefone: " + fornecedor.telefone
    + ", Endereço: " + fornecedor.endereco);
var produto = new produto_1.Produto(1, "Notebook Dell", fornecedor, 12599.00);
console.log("Produto: " + produto.id + ", Descrição: " + produto.descricao
    + ", Fornecedor: " + produto.fornecedor.nome_razaoSocial
    + ", Valor Unitário: " + produto.vlrUnitario);
console.log("Vim ate aqui");
try {
    var estoque = new estoque_1.Estoque(1, produto, -3);
    estoque.valorDoProdutoEmEstoque();
}
catch (erro) {
    console.log(erro.message);
}
console.log("NÂO Vim ate aqui");
var produtoB = new produto_1.Produto(2, "Monitor Dell P2722H", fornecedor, 0);
console.log(produtoB);
/*
var estoqueB = new Estoque(2, produtoB, -1);
estoqueB.valorDoProdutoEmEstoque();
*/
//var prompt = require('prompt-sync')
/*
var distance = prompt("Digite aqui a distância");
console.log(distance);
 
var distance2 = prompt("Digite aqui a distância2");
console.log(distance2);
*/ 
//# sourceMappingURL=index.js.map