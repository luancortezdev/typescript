function criarPessoa(config) {
    var pessoa = { nome: "Não informado", idade: 0 }; // esses são os padrões "default"
    if (config.nome) {
        pessoa.nome = config.nome;
    }
    if (config.idade) {
        pessoa.idade = config.idade;
    }
    return pessoa;
}
var joao = criarPessoa({ nome: "João" });
var indigente = criarPessoa({ idade: 27 });
console.log(joao);
console.log(indigente);
