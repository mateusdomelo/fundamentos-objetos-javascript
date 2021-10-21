// Criação da classe Cliente, seu construtor(recebe os valores das propriedades) e seus métodos/comportamentos
class Cliente {
    constructor(nome, sobrenome, cpf, email, saldo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    exibirSaldo() {
        return this.saldo;
    }
}

// Instanciando Cliente -> Criando o objeto "cliente1"
const cliente1 = new Cliente("Mateus", "Melo", "123.321.456-65", "mateus@mail.com", 800);

// Saída dos dados trabalhados anteriormente na nova instância de Cliente / Objeto "cliente1"
console.log(`
            Cliente: ${cliente1.nome} ${cliente1.sobrenome}
            CPF ${cliente1.cpf.substring(0,4)}***.***-**
            Email: ${cliente1.email}
            Saldo: R$${cliente1.exibirSaldo()}
            `);

// Criação da classe ClientePoupanca, seu construtor recebe os valores que serão atribuidos à nova propriedade "saldoPoupanca" e também as demais propriedade herdadas da classe Cliente. Ademais, os métodos da classe-pai também serão herdados
class ClientePoupanca extends Cliente {
    constructor(nome, sobrenome, cpf, email, saldo, saldoPoupanca) {
        super(nome, sobrenome, cpf, email, saldo)
        this.saldoPoupanca = saldoPoupanca;
    }

    depositarPoupanca(valor) {
        return this.saldoPoupanca += valor;
    }

    exibirSaldoPoupanca() {
        return this.saldoPoupanca;
    }
}

// Instanciando Cliente -> Criando o objeto "cliente2"
const cliente2 = new ClientePoupanca("Giulia", "Pinho", "987.789.567-12", "giulia@mail.com", 1000, 600);

// Saída dos dados trabalhados anteriormente na nova instância de ClientePoupanca / Objeto "cliente2"
console.log(`
            Cliente: ${cliente2.nome} ${cliente2.sobrenome}
            CPF ${cliente2.cpf.substring(0,4)}***.***-**
            Email: ${cliente2.email}
            Saldo: R$${cliente2.exibirSaldo()}
            Saldo Poupança: R$${cliente2.exibirSaldoPoupanca()}
            `);
