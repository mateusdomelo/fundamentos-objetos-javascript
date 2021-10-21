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
    seguro: undefined,
    saldo: 0,
    depositar: function (valor) {
        return this.saldo += valor
    },
    exibirSaldo: function () {
        return this.saldo;
    },
}

// Função que receberá um objeto "cliente" como parametro, assim será armazenado na variável "propPessoa" um array contendo as propriedades
// desse objeto, tornando possível a verificação da existência da propriedade "dependente", validando ou não a possibilidade de seguro ao cliente
function oferecerSeguro(pessoa) {
    const propPessoa = Object.keys(pessoa);
    if (propPessoa.includes("dependente")) {
        return pessoa.seguro = 'Disponível';
    } else {
        return pessoa.seguro = 'Indisponível';
    }
}

// Execução da função "oferecerSeguro"
oferecerSeguro(cliente)

// Imprime o resultado para o objeto "cliente" informado na função anteriormente
console.log(`O cliente ${cliente.nome} tem o seguro como: ${cliente.seguro.toLowerCase()}`);
