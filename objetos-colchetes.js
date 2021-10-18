// Cliente -> Objeto
// "nome", "dataNascimento"... são chaves/propriedades. Cada chave tem seu valor

const cliente = {
    nome: "Mateus Melo",
    dataNascimento: "10-09-1997",
    cpf: "123.321.456-65",
    email: "mateus@mail.com",
    ativo: true
}

const chaves = ["nome", "dataNascimento", "cpf", "email", "ativo"]

// Acesso direto aos elementos do array "chaves" utilizando os indices explicitamente
// console.log(cliente[chaves[0]]);
// console.log(cliente[chaves[1]]);
// console.log(cliente[chaves[2]]);
// console.log(cliente[chaves[3]]);

// Percorrer o array "chaves" utilizando o forEach. Assim, irá imprimir o valor das chaves do objeto "cliente"
// Será realizada uma verificação para caso a chave seja "cpf" a saída do seu valor será "criptografada"
chaves.forEach(function (chave) {
    console.log(chave.toUpperCase())
    if (chave === "cpf") {
        console.log(`${cliente[chave].substring(0, 3)}.***.***-${cliente[chave].substring(12, 14)}\n`)
    } else {
        console.log(cliente[chave] + "\n")
    }
})