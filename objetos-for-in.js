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

let relatorio = "";

// Percorrer o objeto "cliente", armazenando suas chaves e respectivos valores na variável "relatorio"
// Posteriormente será possível imprimir essas informações de forma legível
for (info in cliente) {
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue;
    } else {
        relatorio += `${info.toUpperCase()} - ${cliente[info]}\n`;
    }
}

// Imprimir relatório finalizado com as informações salvas
console.log(relatorio);
