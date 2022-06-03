function imprimirDados(obj: {nome: string, idade: number}) { // prestar atenção nessa anotação do parâmetro da função
    console.log(`Nome: ${obj.nome}, idade: ${obj.idade} anos.`)
}

let pessoa1 = { nome: 'Cortez', idade: 27}
let pessoa2 = { nome: 'Luan'}
imprimirDados(pessoa1)
imprimirDados(pessoa2) // Vai dar um erro porque não declarei a outra propriedade do objeto(idade)








function imprimirAlunos(obj: {nome: string, ano: number, cadastrado: boolean}) {
    console.log(`O aluno ${obj.nome} do ${obj.ano}º ano. tem a situação de cadastro: ${obj.cadastrado}`)
}

let alunoA = {nome: 'Cortez', ano: 3, cadastrado: true}
let alunoB = {nome: 'Sião', ano: 1, cadastrado: false}
let alunoC = {nome: 'Tonelada', ano: 2}

imprimirAlunos(alunoA)
imprimirAlunos(alunoB)
imprimirAlunos(alunoC) // ler o erro