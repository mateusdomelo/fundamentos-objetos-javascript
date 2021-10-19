const cliente = {
    nome: "Mateus Melo",
    dataNasc: "10-09-1997",
    cpf: "123.321.456-65",
    email: "mateus@mail.com",
    ativo: true,
    contato: ["551184629207", "551145827912"],
    dependente: {
        nome: "Cristina",
        dataNasc: "04-10-1966",
        cpf: "789.456.321-01"
    },
    saldo: 0,
    
    depositar: function (valor) {
        return this.saldo += valor
    },
    exibirSaldo: function () {
        return this.saldo;
    },

}

// Imprimir saldo atual (inicial) de 0
console.log(`Saldo atual R$${cliente.exibirSaldo()}\n`);

// Usar o método depositar para somar o valor informado ao valor atual do saldo
console.log(`Depósito de R$${cliente.depositar(580)}\n`) ;

// Imprimir o novo saldo de 580
console.log(`Novo saldo de R$${cliente.exibirSaldo()}`);