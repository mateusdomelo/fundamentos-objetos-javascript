// JSON -> JavaScript Object Notation (Notação de Objeto JavaScript): Estrutura para Transferência de Dados (Cliente/Servidor)


// Converter um objeto literal JavaScript para JSON
const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "Programação",
    versoes: ["Ebook", "Impresso"]
});

// Imprime conversão para JSON
console.log(`Resultado JSON:\n${jsonLivro}\n`);

// Converter de JSON para objeto literal JavaScript
const objLivro = JSON.parse(jsonLivro);

// Imprime conversão para objeto JavaScript
console.log("Resultado Objeto JavaScript: ")
console.log(objLivro);