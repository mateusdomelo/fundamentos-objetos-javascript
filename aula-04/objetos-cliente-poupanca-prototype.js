// Função construtora "Cliente" pra instanciar um novo objeto posteriormente
function Cliente(nome, dataNasc, cpf, email, saldo) {
    this.nome = nome;
    this.dataNasc = dataNasc;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        return this.saldo += valor;
    }
};

// Novo objeto (instância) de Cliente
const mateus = new Cliente("Mateus", "10-09-1997", "123.321.123-12", "mateus@mail.com", 500);

console.log(mateus);

// Função construtora "ClientePoupanca" pra instanciar um novo objeto posteriormente.
// Essa função herda as propriedades e métodos da instância Cliente. Além de criar uma nova propriedade (única à ela) chamada "saldoPoupanca"
function ClientePoupanca(nome, dataNasc, cpf, email, saldo, saldoPoupanca) {
    Cliente.call(this, nome, dataNasc, cpf, email, saldo);
    this.saldoPoupanca = saldoPoupanca;
};

// Novo objeto (instância) de ClientePoupanca
const giulia = new ClientePoupanca("Giulia", "14-12-1998", "567-987-123-01", "giulia@mail.com", 200, 800);


// Através do prototype da função construtora ClientePoupanca, cria um método unico chamado "depositarPoupanca" que agrega valor a propriedade "saldoPoupanca"
ClientePoupanca.prototype.depositarPoupanca = function (valor) {
    this.saldoPoupanca += valor
}

// Novo método "depositarPoupanca" é utilizado no ob
giulia.depositarPoupanca(150);

console.log(giulia);
