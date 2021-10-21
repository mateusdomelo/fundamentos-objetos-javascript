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

// Instanciando Cliente -> Criando o objeto "mateus"
const mateus = new Cliente("Mateus", "Melo", "123.321.456-65", "mateus@mail.com", 800);

// Saída dos dados trabalhados anteriormente na nova instância de Cliente / Objeto "mateus";
console.log(`
            Cliente: ${mateus.nome} ${mateus.sobrenome}
            CPF ${mateus.cpf.substring(0,4)}***.***-**
            Email: ${mateus.email}
            Saldo de R$${mateus.exibirSaldo()}
            `);