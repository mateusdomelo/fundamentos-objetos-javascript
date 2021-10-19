const clientes = [{
    nome: "Mateus Melo",
    dataNasc: "10-09-1997",
    cpf: "123.321.456-65",
    email: "mateus@mail.com",
    ativo: true,
    contato: ["551184629207", "551145827912"],
    dependentes: [{
        nome: "Cristina",
        dataNasc: "04-10-1966",
        cpf: "789.456.321-01"
    }]
},
{
    nome: "Giulia Pinho",
    dataNasc: "14-12-1998",
    cpf: "543.123.876-90",
    email: "giulia@mail.com",
    ativo: true,
    contato: ["551164583092", "551182640973"],
    dependentes: [{
        nome: "Mila",
        dataNasc: "11-08-2018",
    }]
}]

let listaDependentes = [];

// Percorre o array/lista de objetos "clientes" e dentro desses são extraídos os objetos internos ao array -> Valor da chave "dependentes"
clientes.forEach(cliente => listaDependentes.push(...cliente["dependentes"]))

// Imprime, em tabela, o resultado do valor da chave "dependentes" dos diferentes objetos dentro do array Clientes
console.table(listaDependentes);