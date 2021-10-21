const cliente = {
    nome: "Mateus Melo",
    dataNasc: "10-09-1997",
    cpf: "123.321.456-65",
    email: "mateus@mail.com",
    ativo: true,
    contato: ["551184629207", "551145827912"]
}

// Imprimir objeto ANTES de receber nova propriedade
console.log(cliente);

cliente.dependente = {
    nome: "Cristina",
    dataNasc: "04-10-1966",
    cpf: "789.456.321-01"
}

// Imprimir objeto DEPOIS de receber nova propriedade "dependente" que tem como valor um novo objeto
console.log(cliente);
