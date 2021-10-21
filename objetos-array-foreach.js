const cliente = {
    nome: "Mateus Melo",
    dataNascimento: "10-09-1997",
    cpf: "123.321.456-65",
    email: "mateus@mail.com",
    ativo: true,
    contato: ["551184629207", "551145827912"]
}

// Entrar na propriedade/chave "contato" do objeto "cliente" e imprimir cada elemento do array
cliente.contato.forEach((num, indice) => {
    console.log(`Contato ${indice + 1}: ${num}`);
});