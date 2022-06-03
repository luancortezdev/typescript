interface config {
    nome?: string; // ?: significa, nesse caso, que o nome é opcional ser uma string
    idade?: number;
}

function criarPessoa(config: config): {nome: string; idade: number} {
    let pessoa = {nome: "Não informado", idade: 0} // esses são os padrões "default"

    if(config.nome) {
        pessoa.nome = config.nome
    }
    if(config.idade) {
        pessoa.idade = config.idade
    }

    return pessoa
}

let joao = criarPessoa({nome: "João"})
let indigente = criarPessoa({idade: 27})

console.log(joao)
console.log(indigente)