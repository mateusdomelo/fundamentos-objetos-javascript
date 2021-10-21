// Função construtora pra instanciar um novo objeto posteriormente
function Cliente(nome, dataNasc, cpf, email, saldo) {
    this.nome = nome;
    this.dataNasc = dataNasc;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        return this.saldo += valor
    }
};

// Criação de uma nova instância Cliente
const mateus = new Cliente("Mateus", "10-09-1997", "123.321.123-12", "mateus@mail.com", 500);

// Imprime a nova instância armazenada
console.log(mateus);